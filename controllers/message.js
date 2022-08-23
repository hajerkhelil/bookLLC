
const MsgSchema = require('../models/message')
const UserSchema = require('../models/auth')



exports.SendMsg = async (req,res) => {
    const {sender, receiver, content}=req.body
    const {id}= req.params
    console.log("sender",req.user.id);
    try {
        const newmsg = new MsgSchema({
            sender: req.user._id,
            // receiver: req.body.receiver,
            receiver: id,
            content: req.body.content
        })
        // console.log("receiver",req.body.receiver);
        console.log("receiver",id);
        console.log("content",req.body.content );

        await newmsg.save()
        res.status(res.statusCode).send({msg:'msg added successfully', newmsg  })
        } catch (error) {
            res.status(500).send({msg:"msg not added successfully", error})
    }
}