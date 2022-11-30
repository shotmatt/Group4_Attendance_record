module.exports = mongoose => {
  var Attendence = mongoose.model(
    "Attendence",
    mongoose.Schema(
      {
        LessonID: Number,
        StudentID: Number,
        Attendence: Number
      }
    ), "Attendence"
  );
  
  return Attendence;
};
