var express = require('express');
var router = express.Router();

//Require controller
var StudentIDsController = require('../controllers/StudentIDs.controller');

//get at root
router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Student database"});
});

// Retrieve a single Student with name
router.get("/StudentIDs/:name", StudentIDsController.findOne);

//get all students
router.get("/StudentIDs/", StudentIDsController.findAll);
 
// Update a Student with id
router.put("../models/StudentIDs/:name", StudentIDsController.update);
 
module.exports = router;