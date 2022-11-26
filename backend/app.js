const express = require('express');
const cookieParser = require('cookie-parser');
var path = require('path');
const logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index'); //
var StudentIDsRouter = require('./routes/StudentIDs'); //

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/StudentIDs', StudentIDsRouter); //

app.get('/', (req, res, next) => {
  res.send('hello world')
})

module.exports = app;