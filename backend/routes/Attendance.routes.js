var express = require('express');
var router = express.Router();

//Require controller
var AttendanceController = require('../controllers/Attendance.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Attendance database"});
});

// Retrieve attendance with StudentID and LessonID
router.get("../models/Attendance/:lesson", AttendanceController.findOne);

 
module.exports = router;