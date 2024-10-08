const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser'); // Import body-parser
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(bodyParser.json()); // Use body-parser to parse JSON
// Middleware to parse JSON requests
app.use(express.json());
// Enable CORS for all routes
app.use(cors()); // Add this line to enable CORS
// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // MySQL root user
    password: '',     // No password
    database: 'pets'  // Your database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Routes for get all  Users
app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Routes for get single user 
app.post('/api/user', (req, res) => {  // Change GET to POST
    const { email, password } = req.body; // Get email and password from body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Use a parameterized query to prevent SQL injection
    const query = 'SELECT * FROM Users WHERE Email = ? AND Password = ?';
    connection.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        // Check if any user matches the email and password
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If there's a match, return the user details
        res.json(results[0]); // Return the first matching user
    });
});


// Create a new user
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    connection.query('INSERT INTO Users SET ?', newUser, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...newUser });
    });
});

// Routes for Pets
app.get('/api/pets', (req, res) => {
    connection.query('SELECT * FROM Pets', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});
// Get a single pet by ID
app.get('/api/pet', (req, res) => {
    const petId = req.query.id;

    // Log the incoming query parameter
    console.log('Received Pet ID:', petId);

    if (!petId) {
        return res.status(400).json({ message: 'Pet ID is required' });
    }

    // Log the query being executed
    console.log('Executing Query: SELECT * FROM Pets WHERE PetID = ?', [petId]);

    connection.query('SELECT * FROM Pets WHERE PetID = ?', [petId], (err, results) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: err });
        }

        // Log the results returned from the database
        console.log('Query Results:', results);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        res.json(results[0]);
    });
});









// Create a new pet
app.post('/api/pets', (req, res) => {
    const newPet = req.body;
    connection.query('INSERT INTO Pets SET ?', newPet, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...newPet });
    });
});

// Routes for AdoptionBookings
app.get('/api/adoptionBookings', (req, res) => {
    connection.query('SELECT * FROM AdoptionBookings', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Create a new adoption booking
app.post('/api/adoptionBookings', (req, res) => {
    const newBooking = req.body;
    connection.query('INSERT INTO AdoptionBookings SET ?', newBooking, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...newBooking });
    });
});

// Routes for get all Vendors
app.get('/api/vendors', (req, res) => {
    connection.query('SELECT * FROM Vendors', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});


// Routes for get Single Vendors

app.post('/api/vendor', (req, res) => {  // Change GET to POST
    const { email, password } = req.body; // Get email and password from body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Use a parameterized query to prevent SQL injection
    const query = 'SELECT * FROM Vendors WHERE Email = ? AND Password = ?';
    connection.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        // Check if any vendor matches the email and password
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If there's a match, return the vendor details
        res.json(results[0]); // Return the first matching vendor
    });
});



// Create a new vendor
app.post('/api/vendors', (req, res) => {
    const newVendor = req.body;
    connection.query('INSERT INTO Vendors SET ?', newVendor, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...newVendor });
    });
});

// Routes for PetStatusChangeLog
app.get('/api/petStatusChangeLog', (req, res) => {
    connection.query('SELECT * FROM PetStatusChangeLog', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Create a new status change log entry
app.post('/api/petStatusChangeLog', (req, res) => {
    const newLog = req.body;

    // First, insert the new log into PetStatusChangeLog
    connection.query('INSERT INTO PetStatusChangeLog SET ?', newLog, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        // If insert is successful, update the pet's status
        const petID = newLog.PetID;  // Assuming the PetID is passed in the request body
        const newStatus = newLog.NewStatus;  // Assuming the new status is passed in the request body

        connection.query('UPDATE Pets SET Status = ? WHERE PetID = ?', [newStatus, petID], (updateErr) => {
            if (updateErr) {
                // Rollback the log insert if the update fails
                connection.query('DELETE FROM PetStatusChangeLog WHERE LogID = ?', [result.insertId], (rollbackErr) => {
                    if (rollbackErr) {
                        console.error("Rollback failed:", rollbackErr);
                    }
                });
                return res.status(500).json({ error: updateErr });
            }

            // If both operations are successful, respond with the new log entry
            res.status(201).json({ id: result.insertId, ...newLog });
        });
    });
});


// Define the default route
app.get('/api/', (req, res) => {
    res.send('Welcome to Petfinder');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
