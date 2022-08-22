

const bcrypt= require("bcrypt")
const jwt= require('jsonwebtoken')
const UserSchema = require ("../models/auth")


exports.Register= async(req,res)=> {
    
    const {email,password}= req.body
    try {
        const user = new UserSchema(req.body)
        const found = await UserSchema.findOne({email})
        if (found)
        { return  res.status(400).send({  errors:[{msg:"user already exists" }]})}

        const salt=10
        const hashedpassword = await bcrypt.hash(password, salt)
        user.password= hashedpassword

        const payload={id:user._id}
        const token= jwt.sign(payload, process.env.SecretOrKey)

        await user.save()

        res.status(200).send({msg:'registered successfully', user, token })

    } catch (error) {
        res.status(500).send({errors: [{msg: "could not register"}]})
    }
}


exports.Login= async (req,res)=>{

    const {email,password}= req.body
    try {
        const user= await UserSchema.findOne({email})
        if (!user)
        {return  res.status(400).send({errors: [{msg: 'bad credentials'}]})}

        const  match= await bcrypt.compare(password, user.password)
        if (!match) 
        {return  res.status(400).send({errors: [{msg: 'bad credentials'}]})}

        const payload={id: user._id}
        const token=jwt.sign(payload, process.env.SecretOrKey)
        res.status(200).send({msg:'login successfully', user, token })
    } catch (error) {
        res.status(500).send({errors: [{msg:"could not login"}]})
    }
}

// all users

exports.AllUsers= async (req,res) => {

    try {
        
        const users= await UserSchema.find();
        res.status(200).send({msg: "list of users", users });

    } catch (error) {
        res.status(500).send({msg:"could not get users", error})

    }
}


exports.DeleteUser= async (req,res) => {
    const {id}= req.params;
    try {
        const deleted= await UserSchema.findByIdAndDelete(id)
        res.status(200).send({msg: "user is deleted", deleted})
    } catch (error) {
        res.status(500).send({msg:"could not delete user", error})

    }
}


exports.UpdateUser = async (req,res) => {
const {id}= req.params
try {
    const updated= await UserSchema.findByIdAndUpdate(id,{$set: {...req.body}})
    res.status(200).send({msg:"user updated" , updated})
} catch (error) {
    res.status(500).send("could not update user")
}
}


exports.updatePassword = async (req, res) => {
    const {password}= req.body
    try {
        const tokenData = await jwt.verify(req.params.token, process.env.SecretOrKey);
        console.log(tokenData);
        console.log("tokenData.id ",tokenData.id  );
        const userdata = await UserSchema.findOne({ _id: tokenData.id }).exec();
        console.log("userdata", userdata)
        if (userdata != null) {
            saltRounds = await bcrypt.genSalt(10);
            hasdhedPassword = await bcrypt.hash(password, saltRounds);
            UserSchema.findOneAndUpdate({ _id: userdata.id }, { $set: { password: hasdhedPassword } }).then(data => {
                console.log("data.name",data.name);
                res.status(res.statusCode).json({
                    message: data.name + " password was  updated"
                    
                })
            }).catch(error => {
                res.status(res.statusCode).json({
                    error: true,
                    message: error.message,
                })
            })
        }
    } catch (error) {
        res.status(res.statusCode).json({
            error: true,
            message: error.message,
        });
    }
}





// exports.BanUser = async (req,res) => {
//     const {id} = req.body
//     console.log(req.body.id);
//   UserSchema.statics.getBlocked = function (id) {
//     console.log(id);
//     return this.findById(id)
//       .select('block.user ')
//       .exec();
//   };  
// }