-- Create the database
CREATE DATABASE IF NOT EXISTS pets;
USE pets;

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    UserType VARCHAR(10) NOT NULL CHECK (UserType IN ('Admin','Customer')),
    MobileNo VARCHAR(255),
    Address VARCHAR(255),
    imgUrl VARCHAR(255)  -- Added imgUrl column
);

-- Create Admins table
CREATE TABLE IF NOT EXISTS Admins (
    AdminID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    AdminName VARCHAR(100),
    Email VARCHAR(100),
    ContactInformation VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create Customers table
CREATE TABLE IF NOT EXISTS Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CustomerName VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    ContactInformation VARCHAR(255),
    Address VARCHAR(255),
    PaymentDetails VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create Vendors table
CREATE TABLE IF NOT EXISTS Vendors (
    VendorID INT AUTO_INCREMENT PRIMARY KEY,
    VendorName VARCHAR(100),
    ContactInformation VARCHAR(255),
    Address VARCHAR(255),
    imgUrl VARCHAR(255)  -- Added imgUrl column
);

-- Create Pets table
CREATE TABLE IF NOT EXISTS Pets (
    PetID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Breed VARCHAR(50),
    Size VARCHAR(20),
    Color VARCHAR(20),
    EnergyLevel VARCHAR(10) NOT NULL CHECK (EnergyLevel IN ('Low', 'Medium', 'High')),
    Friendliness VARCHAR(10) NOT NULL CHECK (Friendliness IN ('Low', 'Medium', 'High')),
    EaseOfTraining VARCHAR(10) NOT NULL CHECK (EaseOfTraining IN ('Easy', 'Moderate', 'Difficult')),
    Status VARCHAR(10) NOT NULL DEFAULT 'Available' CHECK (Status IN ('Available', 'Booked', 'Not Available')),
    Price DECIMAL(10, 2),
    VendorID INT,
    imgUrl VARCHAR(255),  -- Added imgUrl column
    FOREIGN KEY (VendorID) REFERENCES Vendors(VendorID)
);

-- Create AdoptionBookings table
CREATE TABLE IF NOT EXISTS AdoptionBookings (
    BookingID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    PetID INT,
    BookingDate DATETIME,
    PaymentStatus VARCHAR(10) NOT NULL CHECK (PaymentStatus IN ('Pending', 'Completed')),
    DeliveryStatus VARCHAR(10) NOT NULL CHECK (DeliveryStatus IN ('Pending', 'Delivered')),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

-- Create PetStatusChangeLog table
CREATE TABLE IF NOT EXISTS PetStatusChangeLog (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    PetID INT,
    PreviousStatus VARCHAR(10) NOT NULL CHECK (PreviousStatus IN ('Available', 'Booked', 'Not Available')),
    NewStatus VARCHAR(20) NOT NULL CHECK (NewStatus IN ('Available', 'Booked', 'Not Available')),
    ChangeDate DATETIME,
    ChangedBy INT,
    FOREIGN KEY (PetID) REFERENCES Pets(PetID),
    FOREIGN KEY (ChangedBy) REFERENCES Admins(AdminID)
);

-- Insert into Users table
INSERT INTO Users (Username, Password, Email, UserType, MobileNo, Address, imgUrl) VALUES 
('admin', 'hashed_password', 'admin@example.com', 'Admin', '123-456-7890', '123 Admin St', 'http://example.com/admin.jpg')
ON DUPLICATE KEY UPDATE 
    Password = VALUES(Password), 
    Email = VALUES(Email), 
    MobileNo = VALUES(MobileNo), 
    Address = VALUES(Address), 
    imgUrl = VALUES(imgUrl);

INSERT INTO Users (Username, Password, Email, UserType, MobileNo, Address, imgUrl) VALUES 
('customer1', 'hashed_password_customer1', 'customer1@example.com', 'Customer', '098-765-4321', '456 Customer Ave', 'http://example.com/customer1.jpg')
ON DUPLICATE KEY UPDATE 
    Password = VALUES(Password), 
    Email = VALUES(Email), 
    MobileNo = VALUES(MobileNo), 
    Address = VALUES(Address), 
    imgUrl = VALUES(imgUrl);

INSERT INTO Users (Username, Password, Email, UserType, MobileNo, Address, imgUrl) VALUES 
('customer2', 'hashed_password_customer2', 'customer2@example.com', 'Customer', '234-567-8901', '789 Customer Blvd', 'http://example.com/customer2.jpg')
ON DUPLICATE KEY UPDATE 
    Password = VALUES(Password), 
    Email = VALUES(Email), 
    MobileNo = VALUES(MobileNo), 
    Address = VALUES(Address), 
    imgUrl = VALUES(imgUrl);

-- Insert into Admins table
INSERT INTO Admins (UserID, AdminName, Email, ContactInformation) VALUES 
(1, 'Admin Name', 'admin@example.com', '123-456-7890');  -- Ensure UserID = 1

-- Insert into Customers table
INSERT INTO Customers (UserID, CustomerName, Email, Password, ContactInformation, Address, PaymentDetails) VALUES 
(2, 'Customer One', 'customer1@example.com', 'hashed_password_customer1', '098-765-4321', '456 Customer Ave', 'Credit Card'),
(3, 'Customer Two', 'customer2@example.com', 'hashed_password_customer2', '234-567-8901', '789 Customer Blvd', 'PayPal');

-- Insert into Vendors table
INSERT INTO Vendors (VendorName, ContactInformation, Address, imgUrl) VALUES 
('Happy Paws Shelter', '111-222-3333', '101 Shelter Rd', 'http://example.com/vendor1.jpg'),
('Pet Paradise', '222-333-4444', '202 Paradise St', 'http://example.com/vendor2.jpg'),
('Animal Haven', '333-444-5555', '303 Haven Ln', 'http://example.com/vendor3.jpg');

-- Insert into Pets table
INSERT INTO Pets (Name, Age, Breed, Size, Color, EnergyLevel, Friendliness, EaseOfTraining, Status, Price, VendorID, imgUrl) VALUES 
('Buddy', 2, 'Golden Retriever', 'Large', 'Golden', 'High', 'High', 'Easy', 'Available', 500.00, 1, 'http://example.com/buddy.jpg'),
('Whiskers', 3, 'Siamese Cat', 'Medium', 'Cream', 'Medium', 'Medium', 'Moderate', 'Available', 200.00, 3, 'http://example.com/whiskers.jpg'),
('Charlie', 1, 'Labrador Retriever', 'Large', 'Black', 'High', 'High', 'Easy', 'Available', 600.00, 2, 'http://example.com/charlie.jpg'),
('Mittens', 2, 'Maine Coon', 'Large', 'Brown', 'Medium', 'High', 'Moderate', 'Available', 250.00, 2, 'http://example.com/mittens.jpg'),
('Tweety', 1, 'Canary', 'Small', 'Yellow', 'Low', 'High', 'Easy', 'Available', 50.00, 3, 'http://example.com/tweety.jpg'),
('Rex', 4, 'Beagle', 'Medium', 'Tricolor', 'High', 'High', 'Easy', 'Available', 300.00, 1, 'http://example.com/rex.jpg'),
('Bella', 2, 'Poodle', 'Small', 'White', 'Medium', 'High', 'Easy', 'Available', 400.00, 2, 'http://example.com/bella.jpg'),
('Shadow', 3, 'German Shepherd', 'Large', 'Black', 'High', 'High', 'Moderate', 'Available', 550.00, 1, 'http://example.com/shadow.jpg'),
('Coco', 1, 'Cockatiel', 'Small', 'Gray', 'Low', 'Medium', 'Easy', 'Available', 75.00, 3, 'http://example.com/coco.jpg'),
('Snowball', 2, 'Rabbit', 'Small', 'White', 'Low', 'High', 'Easy', 'Available', 100.00, 2, 'http://example.com/snowball.jpg');

-- Insert into AdoptionBookings table
INSERT INTO AdoptionBookings (CustomerID, PetID, BookingDate, PaymentStatus, DeliveryStatus) VALUES 
(2, 1, '2024-08-01 10:00:00', 'Completed', 'Delivered'),  -- Ensure CustomerID=2 and PetID=1 exist
(3, 2, '2024-08-02 12:30:00', 'Pending', 'Pending'),      -- Ensure CustomerID=3 and PetID=2 exist
(2, 3, '2024-08-03 09:00:00', 'Completed', 'Delivered');   -- Ensure CustomerID=2 and PetID=3 exist

-- Insert into PetStatusChangeLog table
INSERT INTO PetStatusChangeLog (PetID, PreviousStatus, NewStatus, ChangeDate, ChangedBy) VALUES 
(1, 'Available', 'Booked', NOW(), 1),  -- Example of changing a pet status
(2, 'Available', 'Booked', NOW(), 1);
