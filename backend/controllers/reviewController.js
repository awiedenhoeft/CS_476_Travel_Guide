const experiences = require('../data/experiences');

// Changes the price range into a number so we can average it.
const getPriceRangeNumber = (priceRange) => {
    if (priceRange === '$') {
        return 1;
    }

    if (priceRange === '$$') {
        return 2;
    }

    if (priceRange === '$$$') {
        return 3;
    }

    if (priceRange === '$$$$') {
        return 4;
    }

    return 0;
};

// Changes the average price number back into dollar signs.
const getPriceRangeText = (priceNumber) => {
    if (priceNumber <= 1) {
        return '$';
    }

    if (priceNumber === 2) {
        return '$$';
    }

    if (priceNumber === 3) {
        return '$$$';
    }

    return '$$$$';
};

// Changes the duration into a number so we can average it.
const getDurationNumber = (duration) => {
    if (duration === 'Full day') {
        return 8;
    }

    const durationNumber = parseFloat(duration);

    if (isNaN(durationNumber)) {
        return 0;
    }

    return durationNumber;
};

// Changes the average duration back into text for the frontend.
const getDurationText = (durationNumber) => {
    if (durationNumber >= 8) {
        return 'Full day';
    }

    return `${Number(durationNumber.toFixed(1))} hours`;
};

// Gets all reviews for one specific experience.
const getReviewsByExperience = (req, res) => {
    const experienceId = parseInt(req.params.id);

    if (isNaN(experienceId)) {
        return res.status(400).json({error: 'Invalid experience ID'});
    }

    const foundExperience = experiences.find(
        experience => experience.id === experienceId
    );

    if (!foundExperience) {
        return res.status(404).json({error: 'Experience not found'});
    }

    res.json(foundExperience.reviews || []);
};

// Adds a new review to one specific experience.
const createReview = (req, res) => {
    const experienceId = parseInt(req.params.id);

    if (isNaN(experienceId)) {
        return res.status(400).json({error: 'Invalid experience ID'});
    }

    const foundExperience = experiences.find(
        experience => experience.id === experienceId
    );

    if (!foundExperience) {
        return res.status(404).json({error: 'Experience not found'});
    }

    const {userId, username, travelStyle, title, location, priceRange,
        duration, tags, rating, description, image} = req.body;

    if (!userId || !username || !title || !location || !priceRange ||
        !duration || rating === undefined || !description) {
        return res.status(400).json({error: 'Missing required review fields'});
    }

    // Makes sure required text fields are not only blank spaces.
    if (username.trim() === '') {
        return res.status(400).json({error: 'Username cannot be empty'});
    }

    if (title.trim() === '') {
        return res.status(400).json({error: 'Title cannot be empty'});
    }

    if (location.trim() === '') {
        return res.status(400).json({error: 'Location cannot be empty'});
    }

    if (priceRange.trim() === '') {
        return res.status(400).json({error: 'Price range cannot be empty'});
    }

    if (duration.trim() === '') {
        return res.status(400).json({error: 'Duration cannot be empty'});
    }

    if (description.trim() === '') {
        return res.status(400).json({error: 'Description cannot be empty'});
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({error: 'Rating must be between 1 and 5'});
    }

    if (!foundExperience.reviews) {
        foundExperience.reviews = [];
    }

    const newReview = {
        id: foundExperience.reviews.length + 1,
        userId,
        username,
        travelStyle: travelStyle || '',
        title,
        location,
        priceRange,
        duration,
        tags: tags || [],
        rating,
        description,
        image: image || ''
    };

    foundExperience.reviews.push(newReview);
    foundExperience.reviewCount = foundExperience.reviews.length;

    // Recalculates the average rating, price range, and duration after adding a review.
    let totalRating = 0;
    let totalPriceRange = 0;
    let totalDuration = 0;

    for (let i = 0; i < foundExperience.reviews.length; i++) {
        totalRating += Number(foundExperience.reviews[i].rating);
        totalPriceRange += getPriceRangeNumber(foundExperience.reviews[i].priceRange);
        totalDuration += getDurationNumber(foundExperience.reviews[i].duration);
    }

    const averageRating = totalRating / foundExperience.reviews.length;
    const averagePriceRange = totalPriceRange / foundExperience.reviews.length;
    const averageDuration = totalDuration / foundExperience.reviews.length;

    foundExperience.rating = Number(averageRating.toFixed(1));
    foundExperience.priceRange = getPriceRangeText(Math.round(averagePriceRange));
    foundExperience.duration = getDurationText(averageDuration);

    res.status(201).json(newReview);
};

module.exports = {
    getReviewsByExperience,
    createReview
};