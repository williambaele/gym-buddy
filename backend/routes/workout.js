const express = require("express");

// workout controller functions
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// Workout routes
router.get("/workouts", getWorkouts);
router.get("/workouts/:id", getWorkout);
router.post("/workouts", createWorkout);
router.delete("/workouts/:id", deleteWorkout);
router.patch("/workouts/:id", updateWorkout);

module.exports = router;
