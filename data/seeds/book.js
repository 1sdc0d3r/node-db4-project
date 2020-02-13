exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Book")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Book").insert([
        { RecipeId: 1, IngredientId: 5, Quantity: 6 },

        { RecipeId: 1, IngredientId: 4, Quantity: 1 },

        { RecipeId: 2, IngredientId: 1, Quantity: 2 },

        { RecipeId: 2, IngredientId: 3, Quantity: 1 },

        { RecipeId: 2, IngredientId: 2, Quantity: 1 },

        { RecipeId: 3, IngredientId: 1, Quantity: 2 },

        { RecipeId: 2, IngredientId: 2, Quantity: 4 },

        { RecipeId: 2, IngredientId: 6, Quantity: 1 }
      ]);
    });
};
