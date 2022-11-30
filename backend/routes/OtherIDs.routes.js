var express = require('express');
var router = express.Router();

//Require controller
var OtherIDsController = require('../controllers/OtherIDs.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Lecturers and Admins database"});
});

router.get('/getAll', OtherIDsController.getAll);
router.get('/findOne', OtherIDsController.findOne);
router.get('/removeAll', OtherIDsController.removeAll);

// Retrieve a single Student with name
router.get("../models/OtherIDs/:name", OtherIDsController.findOne);
// Update a Student with id
router.put("../models/OtherIDs/:name", OtherIDsController.update);
 
module.exports = router;