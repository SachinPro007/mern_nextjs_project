const mongoose = require("mongoose")
require("dotenv").config()

const URL = process.env.MONGO_URI || "mongodb://admin:qwerty@localhost:27017/"

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB