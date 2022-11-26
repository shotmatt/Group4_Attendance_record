const db = require("../models/OtherIDs.model");
const StudentID = db.OtherIDs;

var querystring = require("querystring");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Admin and teacher ID system");
    response.end();
};

// Find a single Animal with an id
exports.findOne = (req, res) => {
    const Name = req.params.Name;

    OtherIDs.findByName(Name)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Teacher or Admin with name: " + Name});
            else 
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Teacher or Admin with name: " + Name});
        })
 
};
 
// Update a Animal by the id in the request
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
                    message: `Cannot update Teacher or Admin with name=${name}. Maybe Teacher or Admin was not found!`
                });
            } else 
                res.send({ message: "Teacher or Admin was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Teacher or Admin with name=" + name
            });
        });
};