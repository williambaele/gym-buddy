const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  getUser,
  updateUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

//GET a single user
router.get("/:id", getUser);

//GET ALL USERS
router.get("/", getUsers);

//UPDATE USER
router.patch("/:id", updateUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
