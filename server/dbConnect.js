const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri = process.env.MONGODB_URI;
  try {
    mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongodb connected ");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
