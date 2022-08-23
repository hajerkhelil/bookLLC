const  mongoose= require ('mongoose')

const BookSchema= new mongoose.Schema({

    name: {type: String, required:true},
    images: {type: String, required:true},
    author: {type: String, required: true},
    description:{type: String, required: true},
    Genre:{type: String, required: true},
    price:{type: Number, required: true},
    qty:{type:Number, default:0},
    userId: {types: mongoose.Schema.Types.ObjectId}, 

})

module.exports= mongoose.model('book', BookSchema)