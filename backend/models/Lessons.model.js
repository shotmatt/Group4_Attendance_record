module.exports = mongoose => {
  var Lesson = mongoose.model(
    "Lesson",
    mongoose.Schema(
      {
        Coarse: String,
        Lesson: String,
        NoOfWeek: Number,
      }
    )
  );
  
  return Lesson;
};
