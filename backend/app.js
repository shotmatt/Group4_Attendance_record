var createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
var path = require('path');
const logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;


var bodyParser = require("body-parser");
var cors = require('cors');


var StudentIDsRouter = require('./routes/StudentIDs.routes');
var OtherIDsRouter = require('./routes/OtherIDs.routes');
var LessonsRouter = require('./routes/Lessons.routes');
var AttendenceRouter = require('./routes/Attendence.routes'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/StudentIDs', StudentIDsRouter);
app.use('/OtherIDs', OtherIDsRouter);
app.use('/Lessons', LessonsRouter);
app.use('/Attendence', AttendenceRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect("mongodb://127.0.0.1:27017/Attendence-database"), function (err, db) {
  if(err) throw err
  //write commands here
}
/*var result
let router = express.Router();
router.get(StudentIDsRouter,('Matt',result));*/

app.get('/', (req, res, next) => {
  res.send('hello world')
})

module.exports = app;