const express = require('express');
const router = express.Router();
const experiences = require('../data/experiences');

// This gets all the saved experiences data of a specific user.
router.get('/:userId/saved-experiences', (req, res) => {
    const userId = parseInt(req.params.userId);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    const savedExperiences = experiences.filter(
        experience => experience.savedBy.includes(userId)
    );

    res.json(savedExperiences);
});

// This gets all the experiences of a specific user.
router.get('/:userId/experiences', (req, res) => {
    const userId = parseInt(req.params.userId);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    const userExperiences = experiences.filter(
        experience => experience.userId === userId
    );

    res.json(userExperiences);
});

module.exports = router;