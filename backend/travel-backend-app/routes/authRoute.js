

const express = require("express");
const User = require("../models/usersModel")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

// User Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: "User not found" });
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ error: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: "Error logging in" });
    }
  });
  
  // User Logout (JWT Invalid)
  router.post("/logout", (req, res) => {
    // Invalidate the token (for this demo, client-side handles token removal)
    res.status(200).json({ message: "Logged out successfully" });
  });
  
  module.exports = router;