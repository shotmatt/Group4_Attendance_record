//const db = require("../models/StudentIDs.model");
const db = require("../models");
const StudentID = db.StudentIDs;

//var querystring = require("querystring");

////Welcome page
//exports.start = (response) => {
//    response.writeHead(200, {"Content-type": "text/plain"});
//    response.write("Welcome to the StudentID system");
//    response.end();
//};

// Find a single Animal with an id

exports.findOne = (req, res) => {
    const Name = req.params.Name;

    StudentIDs.findByName(Name)
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

//exports.update = (req, res) => {
//    if (!req.body) {
//        return res.status(400).send({
//            message: "Data to update can not be empty!"
//        });
//    }

//    const name = req.params.name;

//    StudentIDs.findByNameAndUpdate(name, req.body, { useFindAndModify: false })
//        .then(data => {
//            if (!data) {
//                res.status(404).send({
//                    message: `Cannot update Student with name=${name}. Maybe Student was not found!`
//                });
//            } else
//                res.send({ message: "Student was updated successfully." });
//        })
//        .catch(err => {
//            res.status(500).send({
//                message: "Error updating Student with name=" + name
//            });
//        });
//};

//create and save a new student
exports.create = (req, res) => {

};

exports.findAll = (req, res) => {
    const name = req.query.name;
    //console.log(StudentID.findAll);
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    console.log(condition);
    StudentID.find(condition).then(data => {
        //res.render("students", { title: "Student IDs", students: data });
        console.log("findin all");
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "error while retrieving StudentIDs" });
    });
};

//exports.findOne = (req, res) => {

//};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};