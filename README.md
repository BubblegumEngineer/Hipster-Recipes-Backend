# Backend API Template


## Instructions

1. Clone the repo `git clone <repo-url> <new-project-name>`
2. cd into your new project folder and run `npm i`
3. Create a new `.env` file and add the `MONGODB_URI`
4. Run the app with: `npm run dev`

### Backend Summary
Technologies:

MongoDB
Express
React
Node.js with Express.js for building the RESTful API.

CORS is enabled to allow cross-origin requests between the frontend and backend running on different ports during development.

Mongoose for MongoDB data modeling and interaction (mention this if you’re using MongoDB).

Axios for handling requests between different services (mention this if applicable).

API Endpoints:

GET /recipes: Fetches all the recipes stored in the database.

GET /recipes/:id: Fetches a single recipe by its unique ID.

POST /recipes: Creates a new recipe.

PUT /recipes/:id: Updates an existing recipe by its ID.

DELETE /recipes/:id: Deletes a recipe by its ID.

Error Handling: Handles network errors and other server-side issues using custom error messages.

Database:

Describes the MongoDB schema for storing recipe data (e.g., title, ingredients, instructions).

CORS Setup:

Allows requests from different domains (like a frontend running on localhost:5173) using the cors middleware.

This backend is built with Node.js and Express.js, providing a RESTful API for managing recipes. It includes endpoints for creating, reading, updating, and deleting recipes. The backend is connected to a MongoDB database using Mongoose for data storage and retrieval. CORS is enabled to allow cross-origin requests from the frontend during development.