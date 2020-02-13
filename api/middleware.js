const db = require("../data/recipeBookConfig");

const helmet = require("helmet");
const morgan = require("morgan");

module.exports = {
  helmet,
  morgan,
  validRecipeId,
  validIngredientId
};

function validRecipeId(req, res, next) {
  const { id } = req.params;
  db("Recipes")
    .where({ id })
    .then(result => {
      if (!result.length) {
        res.status(404).json({ message: "Invalid recipe id." });
      }
    });
  next();
}

function validIngredientId(req, res, next) {
  const { id } = req.params;
  db("Ingredients")
    .where({ id })
    .then(result => {
      if (!result.length) {
        res.status(404).json({ message: "Invalid ingredient id." });
      }
    });
  next();
}
