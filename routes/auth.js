

const express= require("express");
const {isAuth} = require('../middlewares/isAuth')

const { RegisterValidation, Validation, LoginValidation } = require("../middlewares/Register")
const { Register, Login, UpdateUser, updatePassword, BanUser, OneUser } = require("../controllers/auth")
const {AllUsers}= require("../controllers/auth")
const {DeleteUser}= require("../controllers/auth")
const AuthRoute= express.Router()

AuthRoute.post('/signup',RegisterValidation, Validation, Register)

AuthRoute.post('/logIn',LoginValidation, Validation, Login)

AuthRoute.get('/current', isAuth, (req,res)=> res.send(req.user))

AuthRoute.get('/allusers',isAuth, AllUsers)

AuthRoute.get('/delete/:id',isAuth, DeleteUser)

AuthRoute.put('/UpdateUser/:id', isAuth, UpdateUser)

AuthRoute.put('/UpdatePassword/:token', updatePassword)

AuthRoute.put('/BanUser/:id',isAuth,  BanUser) // admin

AuthRoute.get('/OneUser/:id',  OneUser)



module.exports = AuthRoute;