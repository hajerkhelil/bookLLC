
const express= require("express");
const { SendMsg } = require("../controllers/message");
const {isAuth} = require('../middlewares/isAuth')
const MsgRoute= express.Router()

MsgRoute.post("/SendMsg/:id",isAuth, SendMsg)

module.exports = MsgRoute;
