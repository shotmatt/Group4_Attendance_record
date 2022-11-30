module.exports = mongoose => {
  var StudentIDs = mongoose.model(
    "StudentIDs",
    mongoose.Schema(
      {
        Privlege: String,
        Name: String,
        Coarse: String,
        Password: String,
      }
    ), "StudentIDs"
  );

  return StudentIDs;
};
