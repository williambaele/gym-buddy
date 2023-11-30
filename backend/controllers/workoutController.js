const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {
  const { date, user_id, exercises } = req.body;
  let emptyFields = [];

  if (!date || !user_id || !exercises || exercises.length === 0) {
    if (!date) emptyFields.push("date");
    if (!user_id) emptyFields.push("user_id");
    if (!exercises || exercises.length === 0) emptyFields.push("exercises");

    return res
      .status(400)
      .json({ error: "Some information is missing: ", emptyFields });
  }

  const workoutData = { date, user: user_id, exercises };
  // ADD DOC TO DB
  try {
    const workout = await Workout.create(workoutData);
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
