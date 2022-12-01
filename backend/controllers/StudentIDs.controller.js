const db = require("../models");
const StudentIDs = db.StudentIDs;
const config = require("../config/auth.config.js");
var querystring = require("querystring");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the StudentID system");
    response.end();
};

exports.getAll = (req, res) => {
    const Name = req.query.name;
    const Attendance = req.query.Attendance;
    const params = {}
    if(Name){
        params.Name = Name
    }
    if(Attendance){
        params.Attendance = Attendance
    }
    StudentIDs.find(params)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Student with name: " + Name});
        })
};

exports.getInfo = (req, res) => {
    const id = req.query.id;
    StudentIDs.findOne({_id:id})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with name: " + id});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Student with name: " + id});
        })
};

// Find a single student with an id
exports.findOne = (req, res) => {
    const Name = req.query.name;
    StudentIDs.findOne({Name:Name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Student with name: " + Name});
        })
};

exports.removeAll = (req, res) => {
    const Name = req.query.name;
    StudentIDs.deleteOne({Name:Name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Student with name: " + Name});
        })
};

exports.findByName = (req, res) => {
    StudentIDs.findOne({
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

exports.save = (req, res) => {
    const student = new StudentIDs({
        Privlege: req.body.Privlege,
        Name: req.body.Name,
        Coarse: req.body.Coarse,
        Password: req.body.Password,
        Attendance: req.body.Attendance
    })

    student.save().then(data => {
        console.log("student saved in database");
        res.send({message: "student add successfully"});
    }).catch(err => {
        res.status(500).send({message: err || "some error happened"});
    });
};

// Update a student by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const name = req.params.name;

    StudentIDs.update({'_id':req.body._id},{$set:{'Attendance':req.body.Attendance,
    'Coarse':req.body.Coarse,'Name':req.body.Name,'Password':req.body.Password,'Privlege':req.body.Privlege}},{'upsert':false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with name=${name}. Maybe Student was not found!`
                });
            } else
                res.send({ message: "Student was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with name=" + name
            });
        });
};


