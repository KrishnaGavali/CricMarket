import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/";
    await mongoose.connect(dbURI, {
      dbName: "CricMarket",
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
