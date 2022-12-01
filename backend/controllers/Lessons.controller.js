const db = require("../models");
const Lessons = db.Lessons;

var querystring = require("querystring");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Lessons system");
    response.end();
};

// Find a single Lesson with an id
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

exports.getAll = (req, res) => {
    const Lesson = req.query.lesson;
    const params = {}
    if(Lesson){
        params.Lesson = Lesson
    }
    Lessons.find(params)
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

exports.removeAll = (req, res) => {
    const Lesson = req.query.lesson;
    Lessons.deleteOne({Lesson:Lesson})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Lesson with name: " + Name});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Lesson with name: " + Name});
        })
};
 
// Update a lesson by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const lesson = req.params.lesson;

    Lessons.findByNameAndUpdate(lesson, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Lesson with name=${lesson}. Maybe Lesson was not found!`
                });
            } else
                res.send({ message: "Lesson was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Lesson with name=" + lesson
            });
        });
};
