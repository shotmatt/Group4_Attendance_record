var express = require('express');
var router = express.Router();

//Require controller
var Lessonscontroller = require('../controllers/Lessons.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Lessons database"});
});

router.get("../models/Lessons/:lesson", Lessonscontroller.findOne);
 
module.exports = router;