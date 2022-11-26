const express = require('express');
const cookieParser = require('cookie-parser');
var path = require('path');
const logger = require('morgan');
const cors = require('cors');



var StudentIDsRouter = require('./routes/StudentIDs.routes');
var OtherIDsRouter = require('./routes/OtherIDs.routes');
var LessonsRouter = require('./routes/Lessons.routes');
var AttendenceRouter = require('./routes/Attendence.routes'); 

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/StudentIDs', StudentIDsRouter); //
app.use('/OtherIDs', OtherIDsRouter);
app.use('/Lessons', LessonsRouter);
app.use('/Attendence', AttendenceRouter);

app.get('/', (req, res, next) => {
  res.send('hello world')
})

module.exports = app;