SET FOREIGN_KEY_CHECKS=0;

/* USERS */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    fullName VARCHAR(100),
    userEmail VARCHAR(100) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    travelStyle VARCHAR(50),
    timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* LOCATIONS */

DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    locationID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100),
    locationState VARCHAR(100),
    country VARCHAR(100),
    locationAddress VARCHAR(150),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

/* EXPERIENCES */

DROP TABLE IF EXISTS experiences;

CREATE TABLE experiences (
    experienceID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    locationID INT NOT NULL,
    userID INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    experienceDescription TEXT,
    cost varchar(50),
    duration varchar(100),
    hoursOpen varchar(100),
    daysOpen varchar(100),
    season varchar(100),
    tagID varchar(150),
    hoursOpen varchar(150),
    daysOpen varchar(150),
    season varchar(150),
    timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (locationID) REFERENCES locations(locationID)
        ON DELETE CASCADE,
    FOREIGN KEY (tagID) REFERENCES tags(tagID)
        ON DELETE CASCADE
);

/* REVIEWS */

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    reviewID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    experienceID INT NOT NULL,
    title VARCHAR(150),
    body TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    cost varchar(50),
    duration varchar(100),
    timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userID) REFERENCES users(userID)
        ON DELETE CASCADE,
    FOREIGN KEY (experienceID) REFERENCES experiences(experienceID)
        ON DELETE CASCADE,
    
    UNIQUE (userID, experienceID) -- one review per user per experience
);

/* IMAGES */

DROP TABLE IF EXISTS images;

CREATE TABLE images (
    imageID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    reviewID INT NOT NULL,
    imageURL TEXT NOT NULL,

    FOREIGN KEY (experienceID) REFERENCES experiences(experienceID)
        ON DELETE CASCADE 
);

/* TRIPS */

DROP TABLE IF EXISTS trips;

CREATE TABLE trips (
    tripID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    tripDescription TEXT,
    startDate DATE,
    endDate DATE,
    timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userID) REFERENCES users(userID)
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS trip_experiences;

CREATE TABLE trip_experiences (
    tripExperienceID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tripID INT NOT NULL,
    experienceID INT NOT NULL,
    dayNumber INT,
    orderIndex INT,
    
    FOREIGN KEY (tripID) REFERENCES trips(tripID)
        ON DELETE CASCADE,
    FOREIGN KEY (experienceID) REFERENCES experiences(experienceID)
        ON DELETE CASCADE
);

/* TAGS */
DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
    tagID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tagName varchar(150)
);

/* INDEXES */

CREATE INDEX idx_experiences_location ON experiences(locationID);
CREATE INDEX idx_reviews_experiences ON reviews(experienceID);
CREATE INDEX idx_reviews_user ON reviews(userID);
CREATE INDEX idx_tags_name ON tags(tagName);

SET FOREIGN_KEY_CHECKS=1;