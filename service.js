const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const userRouter = require('./Routers/userRouter');
const interviewRouter = require('./Routers/interviewRouter');
app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/interview',interviewRouter);

module.exports = app