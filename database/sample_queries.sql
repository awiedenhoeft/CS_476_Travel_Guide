/** HOME PAGE **/
/* Display highest-rated experience for user's travel style */

/* Display tags for filtering */
SELECT tagName as "Tag" FROM tags;

/** USERS **/
-- create new user
INSERT INTO users (username, fullName, userEmail, passwordHash)
VALUES (
    :usernameInput,
    :fullNameInput,
    :userEmailInput,
    :passwordInput
);

-- delete user
DELETE FROM users WHERE username = :selectedUser;

-- user login

/** CREATE EXPERIENCE **/

/* Insert data on creating experience */
INSERT INTO experiences (title, experienceDescription, estimatedCost, estimatedTime, tags, hoursOpen, daysOpen)
VALUES (
    :expTitleInput,
    :expDescriptionInput,
    :expCostInput,
    :expTimeInput,
    :expTags_from_dropdown_input,
    :expHoursInput,
    :expDaysInput,
);

/** EXPERIENCE DISPLAY **/
SELECT (title, experienceDescription, estimatedCost, estimatedTime, tags, hoursOpen, daysOpen) AS ("Name", "Description", "Estimated Cost", "Estimated Duration", "Tags", "Hours of Operation", "Days Open") FROM experiences;


/** CREATE REVIEW **/

-- Display reviews 
SELECT (title, body, rating, estimatedCost, estimatedTime) AS (Title, Review, Rating, Cost, Duration) FROM reviews;

-- Sort reviews by travel style


/** SEARCH **/
-- Search for experience by name
SELECT * FROM experiences WHERE title = :experienceTitleInput;

-- Search for experience by keyword
SELECT * FROM experiences WHERE title LIKE '%searchterm%';

/** QUIZ **/
