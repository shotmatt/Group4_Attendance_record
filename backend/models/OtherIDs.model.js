module.exports = mongoose => {
  var OtherIDs = mongoose.model(
    "OtherIDs",
    mongoose.Schema(
      {
        Privlege: String,
        Name: String,
        Coarse: String,
        password: String,
      }
    ), "OtherIDs"
  );
  
  return OtherIDs;
};
