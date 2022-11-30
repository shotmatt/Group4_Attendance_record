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
var AttendanceRouter = require('./routes/Attendance.routes'); 

var AuthRouter = require("./routes/auth.routes");
var SecurityRouter = require("./routes/security.routes");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/StudentIDs', StudentIDsRouter);
app.use('/OtherIDs', OtherIDsRouter);
app.use('/Auth', AuthRouter);
app.use('/Lessons', LessonsRouter);
app.use('/Attendence', AttendanceRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log("The database is successfully connected! :)");
}).catch(err => {
        console.log("Cannot connect to the databases!:", err);
        process.exit();
})

app.get('/', (req, res, next) => {
  res.send('The server is up and running :)')
})

module.exports = app;