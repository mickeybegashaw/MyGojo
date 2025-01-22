import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

export default connect;

