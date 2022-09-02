const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	rating: { type: Number },
    rateduser: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User'}, 

});

module.exports = mongoose.model('Review', ReviewSchema);
