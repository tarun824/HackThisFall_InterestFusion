const express = require("express");
const authRouter = express.Router();

const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const sendEmail = require("../config/notification");

authRouter.post("/signup", async (req, res) => {
  try {
    // Validate input data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    // Set cookie
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
      sameSite: "None",
      secure: true,
    });

    // Send registration email
    await sendEmail(
      emailId,
      "Welcome to Our App!",
      `Hi ${firstName}, welcome to Our App! We're excited to have you on board.`,
      `<h1>Welcome, ${firstName}!</h1><p>Thank you for signing up for Our App. We're thrilled to have you!</p>`
    );

    res.json({ message: "User Added successfully!", data: savedUser });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      // Set cookie
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
        sameSite: "None",
        secure: true,
      });

      // Send login email
      await sendEmail(
        emailId,
        "Login Notification",
        `Hi ${user.firstName}, you just logged into your account.`,
        `<h1>Login Successful!</h1><p>Hello ${user.firstName}, we're notifying you that you logged into your account.</p>`
      );

      res.send(user);
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    sameSite: "None",
    secure: true,
  });
  res.send("Logout Successful!!");
});

module.exports = authRouter;