const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number },
});

const workoutSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: { type: Number },
  exercises: [exerciseSchema],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
