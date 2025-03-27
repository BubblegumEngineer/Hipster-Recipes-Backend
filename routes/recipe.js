import express from "express";
import { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } from "../controller/recipe.js";
const router=express.Router()

router.get('/', getRecipes); // Get all recipes
router.get("/:id", getRecipe); // Get recipe by id
router.post("/", addRecipe); // Add a new recipe
router.put("/:id", editRecipe); // Update a recipe
router.delete("/:id", deleteRecipe); // Delete a recipe

export default router

