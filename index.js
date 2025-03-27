import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipe from "./models/recipe.js";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import recipeRouter from "./routes/recipe.js"

dotenv.config();
// console.log(process.env.MONGODB_URI);

// Connect to MongoDB
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error(e));

const PORT = process.env.PORT || 3000;
const app = express();

// View Engine
app.set("views", "./views");
app.set("view engine", "pug");

// Middlewares
//app.use("/recipe", require("./routes/recipe.js"))*** already have a recipe router on line 28
app.use("/recipe", recipeRouter)
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());



// API Routes
// app.use("/api/health", healthRouter);

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
