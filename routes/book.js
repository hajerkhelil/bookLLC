const express= require("express");
const { AddBook, AllBooks, OneBook, DeleteBook, UpdateBook, test, searchBook, BooksbyUser } = require("../controllers/book");
const { isAuth } = require("../middlewares/isAuth");
const BookRoute= express.Router()

BookRoute.post("/AddBook",isAuth, AddBook)

BookRoute.get("/AllBooks", AllBooks)

BookRoute.get("/BooksbyUser",isAuth, BooksbyUser)

BookRoute.get("/OneBook/:id", OneBook)

BookRoute.delete("/DeleteBook/:id",isAuth, DeleteBook) // admin 

BookRoute.put("/UpdateBook/:id",isAuth, UpdateBook)

BookRoute.post("/searchBook",isAuth,searchBook)

module.exports = BookRoute;