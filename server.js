const express = require('express');
const connectDB = require('./config/ConnectDB');
const AuthRoute = require('./routes/auth');
const BookRoute = require('./routes/book');
const MsgRoute = require('./routes/messge');
var cors = require('cors');
const ReviewRoute = require('./routes/review');

require('dotenv').config();
const app = express();
app.use(cors());

connectDB();
app.use(express.json());
app.use('/api/authe', AuthRoute);
app.use('/api/book', BookRoute);
app.use('/api/msg', MsgRoute);
app.use('/api/review', ReviewRoute);


app.listen(process.env.port, () =>
	console.log(`sever is running on port ${process.env.port}`)
);
