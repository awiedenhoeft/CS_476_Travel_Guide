/* SAMPLE USERS */

INSERT INTO users (username, fullName, userEmail, passwordHash, travelStyle)
VALUES
('alex123', 'Alex Johnson', 'alex@example.com', 'hashed_pw_1', 'adventure'),
('katie_ui', 'Katie Smith', 'katie@example.com', 'hashed_pw_2', 'relaxation'),
('josh_dev', 'Joshua Lee', 'josh@example.com', 'hashed_pw_3', 'culture'),
('kevin_api', 'Kevin Brown', 'kevin@example.com', 'hashed_pw_4', 'social');

/* SAMPLE LOCATIONS */

INSERT INTO locations (city, locationState, country, latitude, longitude)
VALUES
('Paris', NULL, 'France', 48.8566, 2.3522),
('Tokyo', NULL, 'Japan', 35.6895, 139.6917),
('New York', 'NY', 'USA', 40.7128, -74.0060),
('Rome', NULL, 'Italy', 41.9028, 12.4964);

/* SAMPLE EXPERIENCES */

INSERT INTO experiences (locationID, title, experienceDescription, estimatedCost)
VALUES
(1, 'Eiffel Tower Visit', 'Climb and enjoy panoramic views of Paris.', '$$'),
(2, 'Shibuya Crossing Walk', 'Experience the busiest crossing in the world.', 'Free'),
(3, 'Central Park Picnic', 'Relax in NYC’s most famous park.', '$'),
(4, 'Colosseum Tour', 'Guided tour of ancient Roman amphitheater.', '$$');

/* SAMPLE TAGS */

INSERT INTO tags (tagName)
VALUES
('sightseeing'),
('food'),
('nature'),
('history'),
('urban');

/* SAMPLE EXPERIENCE TAGS */

INSERT INTO experience_tags (experienceID, tagID)
VALUES
(5, 1), -- Eiffel Tower → sightseeing
(6, 5), -- Shibuya → urban
(7, 3), -- Central Park → nature
(8, 4); -- Colosseum → history

/* SAMPLE REVIEWS */

INSERT INTO reviews (userID, experienceID, title, body, rating)
VALUES
(1, 5, 'Amazing view!', 'Absolutely worth the climb.', 5),
(2, 6, 'So crowded!', 'Cool experience but very busy.', 4),
(3, 7, 'Relaxing afternoon', 'Perfect picnic spot.', 5),
(4, 8, 'Incredible history', 'A must-see in Rome.', 5);

/* SAMPLE REVIEW TAGS */

INSERT INTO review_tags (reviewID, tagID)
VALUES
(5, 1),
(6, 5),
(7, 3),
(8, 4);

/* SAMPLE EXPERIENCE IMAGES */

INSERT INTO experience_images (experienceID, imageURL)
VALUES
(5, 'https://example.com/eiffel.jpg'),
(6, 'https://example.com/shibuya.jpg'),
(7, 'https://example.com/centralpark.jpg'),
(8, 'https://example.com/colosseum.jpg');

/* SAMPLE REVIEW IMAGES */

INSERT INTO review_images (reviewID, imageURL)
VALUES
(5, 'https://example.com/review1.jpg'),
(6, 'https://example.com/review2.jpg');

/* SAMPLE TRIPS */

INSERT INTO trips (userID, title, tripDescription, startDate, endDate)
VALUES
(1, 'Europe Adventure', 'Visiting historic landmarks.', '2026-06-01', '2026-06-14'),
(2, 'Japan Trip', 'Exploring Tokyo and beyond.', '2026-07-20', '2026-08-01');

/* SAMPLE TRIP EXPERIENCES */

INSERT INTO trip_experiences (tripID, experienceID, dayNumber, orderIndex)
VALUES
(1, 5, 1, 1), -- Eiffel Tower on Day 1
(1, 8, 3, 1), -- Colosseum on Day 3
(2, 6, 1, 1); -- Shibuya on Day 1
