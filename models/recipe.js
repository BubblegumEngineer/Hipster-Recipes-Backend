// const mongoose = require("mongoose");
import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: [
      String
    ],
    instructions: [
      String
    ],
    time: {
      type: String,
    
    },
    coverImage: {
      type: String,
      
    },

  },{ timestamps: true });

   export default mongoose.model("recipe", recipeSchema)
// module.exports=mongoose.model("Recipes", recipeSchema)
