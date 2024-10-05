const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

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

// Routes for Users
app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
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

// Routes for Vendors
app.get('/api/vendors', (req, res) => {
    connection.query('SELECT * FROM Vendors', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
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
    connection.query('INSERT INTO PetStatusChangeLog SET ?', newLog, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: result.insertId, ...newLog });
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
