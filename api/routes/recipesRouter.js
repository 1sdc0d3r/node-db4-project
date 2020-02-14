const express = require("express");
const router = express.Router();
const db = require("../../data/recipeBookModel");
const middleware = require("../middleware");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes =>
      !recipes
        ? res.status(404).json({ message: "No recipes in book" })
        : res.status(200).send(recipes)
    )
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve recipes.", error: err })
    );
});

router.get("/:id", middleware.validRecipeId, (req, res) => {
  const { id } = req.params;
  db.getRecipeById(id)
    .then(recipe => {
      return {
        id: recipe.id,
        name: recipe.name
      };
    })
    .then(addSteps => {
      return db.getInstructions(id).then(steps => {
        return { ...addSteps, steps: steps };
      });
    })
    .then(addIngredients => {
      return db.getShoppingList(id).then(ingredients => {
        return {
          ...addIngredients,
          ingredients: ingredients
        };
      });
    })
    .then(finalRecipe => {
      res.status(200).json(finalRecipe);
    });
});

router.get("/:id/shoppingList", middleware.validRecipeId, (req, res) => {
  db.getShoppingList(req.params.id)
    .then(
      list => res.status(200).send(list)
      //* !list  ? res.status(400).json({ message: "No shopping this week." }):
    )
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "Unable to retrieve shopping list.", error: err })
    );
});

router.get("/:id/instructions", middleware.validRecipeId, (req, res) => {
  db.getInstructions(req.params.id)
    .then(steps => res.status(200).json(steps))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve instructions", error: err })
    );
});

module.exports = router;
