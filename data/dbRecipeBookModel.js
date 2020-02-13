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
  return rb("book as b")
    .join("Recipes as r", "b.RecipeId", "r.id")
    .join("Ingredients as i", "b.ingredientsId", "i.id")
    .where("quantity", ">", 0)
    .andWhere({ RecipeId });
}

function getInstructions(recipe_id) {
  return rb("steps").where("Recipe_id", recipe_id);
  //? {recipe_id}
}
