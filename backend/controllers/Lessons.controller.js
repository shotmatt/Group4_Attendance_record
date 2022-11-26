const db = require("../models/Lessons.model");
const Lessons = db.Lessons;

var querystring = require("querystring");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Lessons system");
    response.end();
};

// Find a single Animal with an id
exports.findOne = (req, res) => {
    const Lesson = req.params.Lesson;

    Lessons.findByLesson(Lesson)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Lesson with name: " + Lesson});
            else 
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Lesson with name: " + Lesson});
        })
 
};
 
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const name = req.params.name;

};