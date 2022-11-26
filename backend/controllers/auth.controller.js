const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.users;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    })

    user.save().then(data => {
        console.log("signup user saved in database");
        res.send({message: "user was registered successfully"});
    }).catch(err => {
        res.status(500).send({message: err || "some error happened"});
    });
};

exports.signin = (req, res) => {
    User.findOne({
        user: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        if (!user) {
            res.status(404).send({message: "User not found"});
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "invalid password"
            });
        }

        var token = jwt.sign({id: user.id }, config.secret, {expiresIn: 86400});

        res.status(200).send({
            id: user._id,
            username: user.username,
            accessToken: token
        });
    });
};
