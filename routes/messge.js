
const express= require("express");
const { SendMsg, getAllMsgs, searchMsg, allchats } = require("../controllers/message");
const {isAuth} = require('../middlewares/isAuth')
const MsgRoute= express.Router()

// MsgRoute.get("/allchats/:id",isAuth,allchats )

MsgRoute.post("/SendMsg",isAuth, SendMsg)  
MsgRoute.get("/AllMsgs",isAuth, getAllMsgs)

MsgRoute.post("/searchMsg",searchMsg) // still 

// idea: i have to get the msg in order from database 

module.exports = MsgRoute;
