import express from "express";
import { homeControl } from "./controllers/server.controller.js";
import userRouter from "./routers/user.router.js";
import { mongoConnection } from "./config/mongoose.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.get("/", homeControl);

mongoConnection();

app.listen(7000, () => {
  console.log(`Server is working On http://localhost:7000`);
});
