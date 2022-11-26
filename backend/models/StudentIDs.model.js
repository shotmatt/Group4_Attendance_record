module.exports = mongoose => {
  var StudentID = mongoose.model(
    "StudentID",
    mongoose.Schema(
      {
        Privlege: String,
        Name: String,
        Coarse: String,
        password: String,
      }
    )
  );
  
  return StudentID;
};
