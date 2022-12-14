var express = require('express');
var router = express.Router();

//Require controller
var StudentIDsController = require('../controllers/StudentIDs.controller');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome to the Student database"});
});
router.get('/getAll', StudentIDsController.getAll);
router.get('/getInfo', StudentIDsController.getInfo);
router.get('/findOne', StudentIDsController.findOne);
router.get('/removeAll', StudentIDsController.removeAll);

router.post("/save", StudentIDsController.save);
router.post("/update", StudentIDsController.update);

// Retrieve a single Student with name
router.get("../models/StudentIDs/:name", StudentIDsController.findOne);
// Update a Student with id
router.put("../models/StudentIDs/:name", StudentIDsController.update);
 
module.exports = router;