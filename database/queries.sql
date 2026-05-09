/** HOME PAGE **/
-- Display highest-rated experience for user's travel style

-- Display tags for filtering
SELECT tagName AS "Tag" FROM tags;

/** USERS **/
-- display user info
SELECT username AS "Username", travelStyle AS "Travel Style" FROM users;

-- user login

/** EXPERIENCES **/
-- add data on creating experience
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

-- display experience info
SELECT title AS "Name", experienceDescription AS "Description", estimatedCost AS "Cost", estimatedTime AS "Duration", tags AS "Tags", hoursOpen AS "Hours", daysOpen AS "Days"
FROM experiences;

SELECT experiences.title, AVG (reviews.rating) AS "Rating" 
FROM experiences 
JOIN reviews ON experiences.experienceID = reviews.experienceID
WHERE experiences.experienceID = :experienceIDInput
GROUP BY experiences.experienceID, experiences.title;


/** REVIEWS **/
-- add data on creating review
INSERT INTO reviews (title, body, rating)
VALUES (
    :reviewTitleInput,
    :reviewBodyInput,
    :reviewRatingInput
);

-- Display reviews 
SELECT users.username FROM users JOIN reviews ON users.userID = reviews.userID
WHERE reviews.experienceID = :experienceIDInput;


-- Sort reviews by travel style
SELECT reviews FROM (( INNER JOIN table2 ON relationship) INNER JOIN table3 ON relationship) WHERE users.travelStyle = :travelStyleInput;

/** SEARCH **/
-- Search for experience by name
SELECT * FROM experiences WHERE title = :experienceTitleInput;

-- Search for experience by keyword
SELECT * FROM experiences WHERE title LIKE '%searchterm%';

/** SORT **/
-- sort by average rating

/** QUIZ **/
-- save top 3 travel styles from quiz results to user's data
INSERT INTO users (travelStyle)
VALUES (:travelStyle1), (:travelStyle2), (:travelStyle3);