
const  mongoose= require ('mongoose')

const MsgSchema= new mongoose.Schema({

    sender: {types: mongoose.Schema.Types.ObjectId}, 
    receiver: {types: mongoose.Schema.Types.ObjectId}, 
    content: {type: String},


})

module.exports= mongoose.model('msg', MsgSchema)