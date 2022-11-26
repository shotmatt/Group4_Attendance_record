var express = require('express');
var router = express.Router();

//Require controller
var StudentIDscontroller = require('../controllers/Attendence.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Attendence database"});
});

// Retrieve a single pet with name
router.get("../models/Attendence/:lesson", StudentIDscontroller.findOne);
 
// Update a pet with id
//router.put("../models/Attendence/:name", StudentIDscontroller.update);
 
module.exports = router;