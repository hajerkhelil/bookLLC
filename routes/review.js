const express = require('express');
const { AddReview, AllReviews } = require('../controllers/review');
const { isAuth } = require('../middlewares/isAuth');
const ReviewRoute = express.Router();

ReviewRoute.post('/AddReview/:id', isAuth, AddReview);
ReviewRoute.get('/AllReviews', AllReviews);

module.exports = ReviewRoute;
