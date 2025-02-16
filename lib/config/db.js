import mongoose from "mongoose";
import dotenv from "dotenv";

export const ConnectDB = async () => {
  await mongoose.connect(
    process.env.MONGODBURL
  );
  console.log("db connnected");
};
