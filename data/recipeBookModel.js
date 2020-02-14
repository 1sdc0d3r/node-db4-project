const rb = require("./recipeBookConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
  getRecipeById,
  getIngredientsByRecipe
};

function getRecipes() {
  return rb("Recipes");
}

function getRecipeById(id) {
  return rb("Recipes")
    .where({ id })
    .first();
}

// function getRecipeById(id) {
//   return rb("Book as b")
//     .join("Ingredients as i", "b.IngredientId", "i.id")
//     .join("Recipes as r", "b.RecipeId", "r.id")
//     .join("Steps as s", "r.id", "s.RecipeId")
//     .select(
//       "r.id",
//       "r.name",
//       "i.name as ingredient",
//       "quantity",
//       "s.Description",
//       "s.StepNumber"
//     )
//     .where("r.id", id);
// }

function getIngredientsByRecipe(RecipeId) {
  return rb("Book as b")
    .join("Recipes as r", "b.RecipeId", "r.id")
    .join("Ingredients as i", "b.ingredientId", "i.id")
    .select("i.name", "quantity")
    .where({ RecipeId });
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
