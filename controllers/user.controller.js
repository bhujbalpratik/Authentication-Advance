import { User } from "../models/user.model.js";

export const userhome = (req, res) => {
  res.send("User Home");
};

export const GetRegister = (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
};

export const PostRegister = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
};

export const GetLogin = (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
};

export const PostLogin = (req, res) => {};
