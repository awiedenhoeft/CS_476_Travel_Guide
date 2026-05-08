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
SELECT userID, passwordHash FROM users WHERE username = :usernameInput;

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
    :expDaysInput
);

/** EXPERIENCE DISPLAY **/
SELECT (title, experienceDescription, estimatedCost, estimatedTime, tags, hoursOpen, daysOpen) AS ("Name", "Description", "Estimated Cost", "Estimated Duration", "Tags", "Hours of Operation", "Days Open") FROM experiences;


/** CREATE REVIEW **/

-- Display reviews 
SELECT title AS "Title", body AS "Review", rating AS "Rating", estimatedCost AS "Estimated Cost", estimatedTime AS "Estimated Duration" FROM reviews;

-- Sort reviews by travel style


/** SEARCH **/
-- Search for experience by name or keyword
SELECT * FROM experiences WHERE title LIKE CONCAT('%', :searchterm, '%');

/** QUIZ **/
