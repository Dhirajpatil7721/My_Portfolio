// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI); // use default options for Mongoose 6+
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;
