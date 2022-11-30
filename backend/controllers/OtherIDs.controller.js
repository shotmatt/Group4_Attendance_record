const db = require("../models");
const OtherIDs = db.OtherIDs;
const config = require("../config/auth.config.js");
var querystring = require("querystring");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Admin and teacher ID system");
    response.end();
};

// Find a single Lecturer or Admin with an id
exports.findOne = (req, res) => {
    const Name = req.query.name;
    OtherIDs.findOne({Name:Name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Lecturer or Admin with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Lecturer or Admin with name: " + Name});
        })
};

exports.removeAll = (req, res) => {
    const Name = req.query.name;
    OtherIDs.deleteOne({Name:Name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Lecturer or Admin with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Lecturer or Admin with name: " + Name});
        })
};

exports.getAll = (req, res) => {
    const Name = req.query.name;
    const params = {}
    if(Name){
        params.Name = Name
    }
    OtherIDs.find(params)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Lecturer or Admin with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Lecturer or Admin with name: " + Name});
        })
};

exports.findByName = (req, res) => {
    OtherIDs.findOne({
        Name: req.body.username
    },function(err, user){
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        if (!user) {
            return res.status(404).send({message: "User not found: "+req.body.username});
        }

        var passwordIsValid = req.body.password == user.Password ?true:false;
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "invalid password:"+req.body
            });
        }

        var token = jwt.sign({id: user._id }, config.secret, {expiresIn: 86400});

        res.status(200).send({
            id: user._id,
            username: user.Name,
            accessToken: token
        });
    })
};
 
// Update a lecturer or admin by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const name = req.params.name;

    OtherIDs.findByNameAndUpdate(name, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Lecturer or Admin with name=${name}. Maybe Lecturer or Admin was not found!`
                });
            } else
                res.send({ message: "Lecturer or Admin was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Lecturer or Admin with name=" + name
            });
        });
};