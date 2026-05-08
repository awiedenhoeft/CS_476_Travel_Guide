// Progress Report 1 experiences routes using Fake data so that we can test
// it. I plan to change some of this when we connect this to database.
const express = require('express');
const router = express.Router();
const experiences = require('../data/experiences');


// Gets all experiences for the main page and search page. The search page 
// will first allow searching by location, tag, and keyword.
router.get('/', (req, res) => {
    let filteredExperiences = experiences;

    const { location, tag, keyword } = req.query;

    if (location) {
        filteredExperiences = filteredExperiences.filter(experience =>
            experience.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    if (tag) {
        filteredExperiences = filteredExperiences.filter(experience =>
            experience.tags.some(savedTag =>
                savedTag.toLowerCase().includes(tag.toLowerCase())
            )
        );
    }

    if (keyword) {
        filteredExperiences = filteredExperiences.filter(experience =>
            experience.title.toLowerCase().includes(keyword.toLowerCase()) ||
            experience.description.toLowerCase().includes(keyword.toLowerCase()) ||
            experience.location.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    res.json(filteredExperiences);
});

// Gets one experience from a specific id. 
router.get('/:id', (req, res) => {
    const experienceId = parseInt(req.params.id);

    if(isNaN(experienceId)){
        return res.status(400).json({error: 'Invalid experience ID'});
    }
    
    const foundExperience = experiences.find(
        experience => experience.id === experienceId
    );

    if (!foundExperience) {
        return res.status(404).json({error: 'Experience not found'});
    }

    res.json(foundExperience);
});

// This will add new experience to the data. I plan to change this when
// we connect it to the database, but for now it was a way to test on
// adding new experiences to the fake data that I made.
router.post('/', (req, res) => {
    const { title, username, userId, images, tags, location, city, state, country, address, 
        description, priceRange, duration, timeOfDay, dayOfWeek, season } = req.body;

    if (!title || !username || !userId || !location || !description) {
        return res.status(400).json({error: 'Missing required fields'});
    }

    // Makes sure required text fields are not only blank spaces.
    if (title.trim() === '') {
        return res.status(400).json({error: 'Title cannot be empty'});
    }

    if (username.trim() === '') {
        return res.status(400).json({error: 'Username cannot be empty'});
    }

    if (location.trim() === '') {
        return res.status(400).json({error: 'Location cannot be empty'});
    }

    if (description.trim() === '') {
        return res.status(400).json({error: 'Description cannot be empty'});
    }

    const newExperience = {
        id: experiences.length + 1,
        title,
        username,
        userId,
        images: images || [],
        tags: tags || [],
        location,
        city: city || '',
        state: state || '',
        country: country || '',
        address: address || '',
        description,
        priceRange: priceRange || '',
        duration: duration || '',
        timeOfDay: timeOfDay || '',
        dayOfWeek: dayOfWeek || '',
        season: season || '',
        likes: 0,
        rating: 0,
        reviewCount: 0,
        savedBy: [],
        reviews: []
    };

    experiences.push(newExperience);

    res.status(201).json(newExperience);
});

module.exports = router;