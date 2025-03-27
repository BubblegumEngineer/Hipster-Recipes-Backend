// const Recipes=require("../models/recipe")
 import Recipes from "../models/recipe.js"

// GET ALL RECIPES
const getRecipes=async(req, res) => {
    const recipes=await Recipes.find()
    return res.json(recipes)
}
// GET ONE RECIPE BY ID
const getRecipe=async(req, res) => {
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
    }

// ADD A RECIPE
const addRecipe=async(req, res) => {
    const {title, ingredients, instructions, time}=req.body

    if(!title || !ingredients || !instructions || !time) { // to be sure that they should not be empty on the form

        res.json({message:"Please Fill Info"})
    }

     const newRecipe=await Recipes.create({
        title, ingredients, instructions, time
    })
    return res.json(newRecipe) // this returns new recipes in json

}
const editRecipe=async(req,res) => {
    const {title, ingredients, instructions, time}=req.body
    let recipe=await Recipes.findByID(req.params.id) // First it finds this recipe then if recipe is present it will edit
    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({title,ingredients,instructions,time})
        }
    }
    catch(err){
        return res.status(404).json({message:"error"})
    }
}

const deleteRecipe=(req, res) => {
    res.json({
       message: "hello"
    })
}

export {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}