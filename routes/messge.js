
const express= require("express");
const { SendMsg, getAllMsgs } = require("../controllers/message");
const {isAuth} = require('../middlewares/isAuth')
const MsgRoute= express.Router()

MsgRoute.post("/SendMsg",isAuth, SendMsg) 
MsgRoute.get("/AllMsgs",isAuth, getAllMsgs)


module.exports = MsgRoute;
