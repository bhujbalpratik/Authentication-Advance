import express from "express";
import {
  GetLogin,
  GetRegister,
  PostLogin,
  PostRegister,
  userhome,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userhome);

router.get("/register", GetRegister);

router.post("/register", PostRegister);

router.get("/login", GetLogin);

router.post("/login", PostLogin);

export default router;
