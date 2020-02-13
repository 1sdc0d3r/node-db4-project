require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 8001;
const recipeRoutes = require("./routes/recipesRouter");

const server = express();
server.use(helmet());
server.use(express.json());
server.use(morgan());

server.use("/api/recipes", recipeRoutes);

server.use("/", (req, res) => res.status(200).send("API is running"));

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
