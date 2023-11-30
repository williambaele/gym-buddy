const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const setSchema = new Schema({
  repetitions: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const exerciseSchema = new Schema({
  muscleGroup: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sets: [setSchema],
});

const workoutSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    exercises: [exerciseSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
