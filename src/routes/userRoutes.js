const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password_hash))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

module.exports = router;
