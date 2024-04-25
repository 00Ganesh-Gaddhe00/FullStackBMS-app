const courseDetails = require('../models/userModel');
const router = require('express').Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

router.post("/register", async (request, response) => {
  try {
    const userExists = await User.findOne({ email: request.body.email });

    if (userExists) {
      response.status(403).send({
        success: false,
        message: "User already exists",
      });
      return;
    }

  const salt = await bcrypt.genSalt(10);
  const hasedpass = await bcrypt.hash(request.body.password, salt)
  request.body.password = hasedpass

    const newUser = new User(request.body);
      await newUser.save();

    response.status(200).send({
      success: true,
      message: "Registration Successful. Please, login!",
    });
  } catch (err) {
    console.error(err);
    response.status(500).send({
      success: false,
      message: "Something went wrong. Please, try again in sometime.",
    });
  }
});

router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });

    if (!user) {
      response.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });
      return;
    }

    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );
    
    if (!validPassword) {
      response.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });
      return;
    }

  response.status(200).send({
    success:true,
    message:"user Logged In"
  })
   
  } catch (err) {
    console.error(err);
    response.status(500).send({
      success: false,
      message: "Something went wrong. Please, try again in sometime.",
    });
  }
});


module.exports = router;
