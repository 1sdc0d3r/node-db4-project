const express = require("express");
const router = express.Router();
const db = require("../data/recipeBookModel");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes =>
      !recipes
        ? res.status(404).json({ message: "No recipes in book" })
        : res.status(400).send(recipes)
    )
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve recipes.", error: err })
    );
});
router.get("/:id/shoppingList", (req, res) => {
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
router.get("/:id/instructions", (req, res) => {
  db.getInstructions(req.params.id)
    .then(steps => res.status(200).json(steps))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve instructions", error: err })
    );
});

module.exports = router;
