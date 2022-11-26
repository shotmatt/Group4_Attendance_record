const db = require("../models/Attendence.model");
const Attendence = db.Attendence;

var querystring = require("querystring");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Attendence system");
    response.end();
};

// Find a single Animal with an id
exports.findOne = (req, res) => {
    const Lesson = req.params.StudentID;
    const StudentID = req.params.Lesson;

    Attendence.findByIDAndLesson(StudentID + Lesson)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with StudentID and lesson: " + StudentID + Lesson});
            else 
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({message: "Error retriving Student with StudentID and lesson: " + StudentID + Lesson});
        })
 
};
/*exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const name = req.params.name;

    StudentID.findByNameAndUpdate(name, req.body, { useFindAndModify: false })
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
};*/