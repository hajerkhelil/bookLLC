
const  mongoose= require ('mongoose')

const MsgSchema= new mongoose.Schema({

    // _id:mongoose.Schema.Types.ObjectId,

    sender:  { type: mongoose.Schema.Types.ObjectId},
    receiver: { type: mongoose.Schema.Types.ObjectId}, 
    content: {type: String},

})

module.exports= mongoose.model('msg', MsgSchema)