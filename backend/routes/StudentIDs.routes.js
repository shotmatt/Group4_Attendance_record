var express = require('express');
var router = express.Router();

//Require controller
var StudentIDsController = require('../controllers/StudentIDs.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Student database"});
});

// Retrieve a single Student with name
router.get("../models/StudentIDs/:name", StudentIDsController.findOne);
 
// Update a Student with id
router.put("../models/StudentIDs/:name", StudentIDsController.update);
 
module.exports = router;