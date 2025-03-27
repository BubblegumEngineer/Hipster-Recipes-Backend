import express from "express";
import { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } from "../controller/recipe.js";
const router=express.Router()


router.get('/',getRecipes); // Get all recipes
router.get("/:id",getRecipe) // Get recipe by id
router.post("/",addRecipe) // add recipe
router.put("/:id",editRecipe) // update recipe
router.delete("/:", deleteRecipe) // delete recipe

export default router

