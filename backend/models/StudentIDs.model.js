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
    ), "StudentIDs"
  );
  
  return StudentID;
};
