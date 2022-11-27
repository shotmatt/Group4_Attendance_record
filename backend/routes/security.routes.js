const { authjwt } = require("../middlewares");
const controller = require("../controllers/security.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("record/security/public", controller.publicContent);
    app.get("/record/security/protected", [authjwt.verifyToken], controller.protectedContent);
}