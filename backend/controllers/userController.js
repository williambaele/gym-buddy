const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// GET ALL USERS
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

// LOGIN A USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // CREATE A TOKEN
    const token = createToken(user._id);
    res.status(200).json({ ...user._doc, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// SIGNUP A USER
const signupUser = async (req, res) => {
  const { email, firstName, password } = req.body;

  try {
    const user = await User.signup(email, firstName, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, firstName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// UPADTE USER
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, firstName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid user ID" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (email) {
    user.email = email;
  }
  if (firstName) {
    user.firstName = firstName;
  }
  if (password) {
    user.password = password;
  }

  try {
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET USER
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid user ID" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

module.exports = { signupUser, loginUser, getUser, updateUser, getUsers };
