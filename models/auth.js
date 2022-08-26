const  mongoose= require ('mongoose')

const UserSchema= new mongoose.Schema({

    //  _id:mongoose.Schema.Types.ObjectId,

    name: {type: String, required: true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required: true},
    banned:{type: Boolean, enum:['false', 'true'], default:'false'},
    role: {type: String, enum:['user', 'admin'], default:'user'},

    msgId: { type: mongoose.Schema.Types.ObjectId, ref:'msg'}, 
    

})


module.exports= mongoose.model('User', UserSchema)