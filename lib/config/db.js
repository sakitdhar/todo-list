import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sakit:EiaaEidrzXxAO4Nk@cluster0.4cfph.mongodb.net/todo"
  );
  console.log("db connnected");
};
