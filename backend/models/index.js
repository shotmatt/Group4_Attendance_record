const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.StudentIDs = require("./StudentIDs.model.js")(mongoose);
db.OtherIDs = require("./OtherIDs.model.js")(mongoose);
db.Attendence = require("./Attendance.model.js")(mongoose);
db.Lessons = require("./Lessons.model.js")(mongoose);
// db.User = require("./user.model.js")(mongoose);
module.exports = db;