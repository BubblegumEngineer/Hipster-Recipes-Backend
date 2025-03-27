// const mongoose = require("mongoose");
import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    
    },
    coverImage: {
      type: String,
      
    },

  },{ timestamps: true });

   export default mongoose.model("Recipes", recipeSchema)
// module.exports=mongoose.model("Recipes", recipeSchema)
