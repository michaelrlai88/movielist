const express = require("express");
const router = express.Router();
const db = require("../db/db");

//login route
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists in db
    const response = await db.query(
      "SELECT email FROM users WHERE email = $1",
      [email]
    );
    if (response.rows[0]) {
      res.status(401).json("User already exists");
    }
    res.json("user does NOT exist");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
