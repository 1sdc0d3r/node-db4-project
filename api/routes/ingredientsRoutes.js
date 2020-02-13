const express = require("express");
const router = express.Router();
const db = require("../../data/recipeBookModel.js");
const middleware = require("../middleware");

router.get("/:id/recipes", middleware.validIngredientId, (req, res) => {
  db.getRecipesByIngredient(req.params.id).then(recipes =>
    !recipes.length
      ? res.status(404).json({ message: "No recipes found." })
      : res.status(200).send(recipes)
  );
});

module.exports = router;
