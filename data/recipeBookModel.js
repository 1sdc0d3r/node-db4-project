const rb = require("./recipeBookConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
  getRecipeById
};

function getRecipes() {
  return rb("Recipes");
}

function getRecipeById(id) {
  return rb("Recipes")
    .where({ id })
    .first();
}

function getShoppingList(RecipeId) {
  return rb("Book as b")
    .join("Recipes as r", "b.RecipeId", "r.id")
    .join("Ingredients as i", "b.ingredientId", "i.id")
    .select("i.name", "quantity")
    .where({ RecipeId });
  // .andWhere("quantity", ">", 0)
}

function getInstructions(RecipeId) {
  return rb("steps")
    .where({ RecipeId })
    .select("StepNumber", "Description")
    .orderBy("StepNumber");
}

function getRecipesByIngredient(id) {
  return rb("Book as b")
    .join("Recipes as r", "b.RecipeId", "r.id")
    .join("Ingredients as i", "b.IngredientId", "i.id")
    .select("r.name")
    .where("i.id", id);
}
