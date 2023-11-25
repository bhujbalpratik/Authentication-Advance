import mongoose from "mongoose";

export const mongoConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", { dbName: "Authentication_2" })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Erron When Connecting To Database " + err));
};
