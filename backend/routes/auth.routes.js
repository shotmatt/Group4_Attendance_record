// const { verifySignUp } = require("../middlewares");
// const controller = require("../controllers/auth.controller")

// module.exports = function (app) {
//     app.use(function (req, res, next) {
//         res.header(
//             "Access-Control-Allow-Headers",
//             "x-access-token, Origin, Content-Type, accept"
//         );
//         next();
//     });
//     app.post(
//         "/record/auth/signup",
//         [verifySignUp.checkDuplicateUsername],
//         controller.signup
//     );
//     app.post("/record/auth/signin", controller.signin);
// };
var express = require('express');
var router = express.Router();

//Require controller
const controller = require("../controllers/auth.controller")
const StudentIDsController = require('../controllers/StudentIDs.controller');
router.post("/record/auth/signin", StudentIDsController.findByName);


module.exports = router;