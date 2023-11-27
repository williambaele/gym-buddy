const Recipe = require("../models/recipeModel");
const mongoose = require("mongoose");

// GET ALL RECIPES
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 });
  res.status(200).json(recipes);
};

// GET A SINGLE RECIPE
const getRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "No such recipe" });
  }

  res.status(200).json(recipe);
};

// CREATE NEW RECIPE
const createRecipe = async (req, res) => {
  const { title, user_id } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Some information is missing: ", emptyFields });
  }

  const recipeData = { title, user: user_id };
  // ADD DOC TO DB
  try {
    const recipe = await Recipe.create(recipeData);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A RECUPE
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findOneAndDelete({ _id: id });

  if (!recipe) {
    return res.status(400).json({ error: "No such recipe" });
  }

  res.status(200).json(recipe);
};

// UPDATE A RECIPE
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!recipe) {
    return res.status(400).json({ error: "No such recipe" });
  }

  res.status(200).json(recipe);
};

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
