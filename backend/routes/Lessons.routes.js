var express = require('express');
var router = express.Router();

//Require controller
var LessonsController = require('../controllers/Lessons.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Lessons database"});
});

router.get('/getAll', LessonsController.getAll);
router.get('/findOne', LessonsController.findOne);
router.get('/removeAll', LessonsController.removeAll);
 
// Update a Lesson with id
router.put("../models/StudentIDs/:name", LessonsController.update);
 
module.exports = router;