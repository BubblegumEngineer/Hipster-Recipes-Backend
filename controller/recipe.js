// const Recipes=require("../models/recipe")
 import Recipes from "../models/recipe.js"
console.log(Recipes)
// GET ALL RECIPES
export const getRecipes=async(req, res) => {
    const recipes=await Recipes.find()
    return res.json(recipes)
}
// GET ONE RECIPE BY ID
export const getRecipe=async(req, res) => {
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
    }

// ADD A RECIPE
export const addRecipe=async(req, res) => {
    const {title, ingredients, instructions, time}=req.body

    if(!title || !ingredients || !instructions || !time) { // to be sure that they should not be empty on the form

        res.json({message:"Please Fill Info"})
    }

     const newRecipe=await Recipes.create({
        title, ingredients, instructions, time
    })
    return res.json(newRecipe) // this returns new recipes in json

}
export const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;
    try {
        const recipe = await Recipes.findById(req.params.id); // Corrected findById
        if (recipe) {
            const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedRecipe); // Return the updated recipe
        } else {
            res.status(404).json({ message: "Recipe not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Error updating recipe", error: err });
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);
        if (deletedRecipe) {
            res.json({ message: "Recipe deleted successfully", recipe: deletedRecipe });
        } else {
            res.status(404).json({ message: "Recipe not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error deleting recipe", error: err });
    }
};