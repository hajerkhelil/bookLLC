const ReviewSchema = require('../models/review');
const mongoose = require('mongoose');

exports.AddReview = async (req, res) => {
	const { rating } = req.body;


	try {
		const newreview = new ReviewSchema({
			rating,
            rateduser,
			userId: req.user.id,
		});
		await newreview.save();
		res.status(200).send({ msg: 'review registered successfully', newreview });
	} catch (error) {
		// res.status(500).send({errors: [{msg: "review could not register"},error]})
		res.status(res.statusCode).json({
			error: true,
			message: error.message,
		});
	}
};



exports.AllReviews = async (req, res) => {
	try {
		const reviews = await ReviewSchema.find();
		res.status(200).send({ msg: 'list of reviews', reviews });
	} catch (error) {
		res.status(500).send({ msg: 'could not get reviews', error });
	}
};