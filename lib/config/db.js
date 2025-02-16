import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "MONGODBURL"
  );
  console.log("db connnected");
};
