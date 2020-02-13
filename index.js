require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8001;

const morgan = require("morgan");
const helmet = require("helmet");

const recipeRoutes = require("./api/routes/recipesRouter");
const ingredientRoutes = require("./api/routes/ingredientsRoutes");

const server = express();
server.use(helmet());
server.use(express.json());
server.use(morgan("combined"));

//routes
server.use("/api/recipes", recipeRoutes);
server.use("/api/ingredients", ingredientRoutes);

server.use("/", (req, res) => res.status(200).send("API is running"));

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
