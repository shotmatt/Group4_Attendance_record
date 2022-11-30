var express = require('express');
var router = express.Router();

//Require controller
var Lessonscontroller = require('../controllers/Lessons.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Lessons database"});
});

router.get('/getAll', Lessonscontroller.getAll);
router.get('/findOne', Lessonscontroller.findOne);
router.get('/removeAll', Lessonscontroller.removeAll);
 
// Update a Lesson with id
router.put("../models/StudentIDs/:name", Lessonscontroller.update);
 
module.exports = router;