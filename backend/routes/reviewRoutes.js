const express = require('express');
const router = express.Router({ mergeParams: true });

const {getReviewsByExperience,createReview} 
    = require('../controllers/reviewController');

router.get('/', getReviewsByExperience);
router.post('/', createReview);

module.exports = router;