import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

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

  if (!name || !email || !password) {
    return res.render("register", {
      title: "Register Page",
      msg: "Please fill your data",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.render("login", {
    title: "Login Page",
  });
};

export const GetLogin = (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
};

export const PostLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.render("register", {
      title: "Register Page",
      msg: "Please Register First",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.render("login", {
      title: "Login Page",
      msg: "Your password was incorrect",
    });
  }

  return res.render("index", {
    title: "Home Page",
    msg: `Welcome ,${user.name}`,
  });
};
