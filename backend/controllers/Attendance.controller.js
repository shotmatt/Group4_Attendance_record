const db = require("../models");
const Attendence = db.Attendence;

var querystring = require("querystring");

//Welcome page
exports.start = (response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Welcome to the Attendence system");
    response.end();
};


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
