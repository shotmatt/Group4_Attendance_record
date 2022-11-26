var express = require('express');
var router = express.Router();

//Require controller
var OtherIDscontroller = require('../controllers/OtherIDs.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Teacher and admin database"});
});

// Retrieve a single pet with name
router.get("../models/OtherIDs/:name", OtherIDscontroller.findOne);
 
// Update a pet with id
router.put("../models/OtherIDs/:name", OtherIDscontroller.update);
 
module.exports = router;