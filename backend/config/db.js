const mongoose = require("mongoose");



const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Pallu:1234@travercymedia.836jg.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;