const rb = require("./recipeBookConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};

function getRecipes() {
  return rb("Recipes");
}

function getShoppingList(RecipeId) {
  return rb("Book as b")
    .join("Recipes as r", "b.RecipeId", "r.id")
    .join("Ingredients as i", "b.ingredientId", "i.id")
    .select("i.name", "quantity")
    .where("quantity", ">", 0)
    .andWhere({ RecipeId });
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
