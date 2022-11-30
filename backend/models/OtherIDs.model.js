module.exports = mongoose => {
  var OtherID = mongoose.model(
    "OtherID",
    mongoose.Schema(
      {
        Privlege: String,
        Name: String,
        Coarse: String,
        password: String,
      }
    ), "OtherIDs"
  );
  
  return OtherID;
};
