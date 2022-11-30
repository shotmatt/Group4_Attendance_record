module.exports = mongoose => {
  var Attendance = mongoose.model(
    "Attendance",
    mongoose.Schema(
      {
        LessonID: Number,
        StudentID: Number,
        Attendence: Number
      }
    ), "Attendance"
  );
  
  return Attendance;
};
