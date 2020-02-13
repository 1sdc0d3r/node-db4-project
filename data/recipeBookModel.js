const rb = require("./recipeBookConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
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
