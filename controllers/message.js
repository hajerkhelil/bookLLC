
const MsgSchema = require('../models/message')
const UserSchema = require('../models/auth')

const  mongoose= require ('mongoose')


exports.SendMsg = async (req,res) => {
    const {sender, receiver, content}=req.body
    // const {id}= req.params
    console.log("sender",req.user.id);
    try {
        const newmsg = new MsgSchema({
            // _id: new mongoose.Types.ObjectId(),
            sender: req.user.id,
            receiver: req.body.receiver,
           //  receiver: id,
            content: req.body.content
        })
         console.log("receiver",req.body.receiver);
       // console.log("receiver",id);
        console.log("content",req.body.content );
        await newmsg.save()
        res.status(res.statusCode).send({msg:'msg added successfully', newmsg  })
        } catch (error) {
            res.status(res.statusCode).json({
                error: true,
                message: error.message,
            })    }
}


exports.getAllMsgs = async (req,res) => {
    // const {id}= req.params
    try {

        const messagesSender = await MsgSchema.find({sender:req.user.id })
        const messagesReceiver = await MsgSchema.find({receiver:req.user.id })

        res.status(res.statusCode).send({msg: "list of msgs", messagesSender,messagesReceiver  });
    } catch (error) {
        res.status(res.statusCode).json({
            error: true,
            message: error.message,
        })  
    }
}


// exports.searchByemail = async (req,res) => {
//  const {email} = req.body 
//     try {
//         const foundEmail = await 
//     } catch (error) {
        
//     }
// }


