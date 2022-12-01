var express = require('express');
var router = express.Router();

//Require controller
const controller = require("../controllers/auth.controller")
const StudentIDsController = require('../controllers/StudentIDs.controller');
router.post("/record/auth/signin", StudentIDsController.findByName);


module.exports = router;