import express from "express";
//import { sign, verify } from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model.js";
import session from "express-session";

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post("/singup", async (req, res) => {
  const { email, password, name } = req.body;

  const createdUser = await User.create({
    email,
    password,
    name,
  });

  console.log(createdUser);

  res.json("OK");
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // const userExists = await User.findOne({
  //   $where:{
  //     email:email
  //   }
  // });


  res.json({
    email:"BikashToken"
  });
});

app.listen(8000, () => console.log("running"));
