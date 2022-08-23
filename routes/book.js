const express= require("express");
const { AddBook, AllBooks, OneBook, DeleteBook, UpdateBook, test } = require("../controllers/book");
const { isAuth } = require("../middlewares/isAuth");
const BookRoute= express.Router()

BookRoute.post("/AddBook",isAuth, AddBook)

BookRoute.get("/AllBooks", AllBooks)

BookRoute.get("/OneBook/:id", OneBook)

BookRoute.delete("/DeleteBook/:id",isAuth, DeleteBook) // admin 

BookRoute.put("/UpdateBook/:id",isAuth, UpdateBook)

module.exports = BookRoute;