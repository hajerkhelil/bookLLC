
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
            content: req.body.content,
            userId: req.user.id,

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


// still 
exports.searchMsg = async (req,res) => {

try {
    const searched = await MsgSchema.find({ "userId": mongoose.Types.ObjectId(req.body.userId) })
    .populate({
        path:'userId',
        select:'email name content',
        match: {email:{$regex:  '.*' + req.body.email + '.*' }}
       })
    // .select(' email  name  content ')
       console.log(searched);

       res.status(res.statusCode).send({msg:"msg searched" , searched})

} catch (error) {
    res.status(res.statusCode).json({
        error: true,
        message: error.message,
    }) 
}
}



// exports.allchats = async (req,res) => {
//     const {id}= req.params
//     try {
//         const msgs= await MsgSchema.find({id})
//          .populate("userId")
//          .select('receiver  ')

//         res.status(200).send({msg: "all msgs", msgs });

        
//     } catch (error) {
//         // res.status(500).send({msg:"could not get chats", error})
//         res.status(res.statusCode).json({
//             error: true,
//             message: error.message,
//         })

//     }
// }

// sender lezem howa li nchouf bih 
// yjibli les receiver li 7kkat m3ahom 

