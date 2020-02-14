exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Steps").insert([
        {
          RecipeId: 1,
          StepNumber: 1,
          Description: "Heat 6 cups water until boiling."
        },
        {
          RecipeId: 1,
          StepNumber: 2,
          Description: "Add Chicken to hot water."
        },
        {
          RecipeId: 1,
          StepNumber: 3,
          Description: "Enjoy soup! Caution: HOT!"
        },
        {
          RecipeId: 2,
          StepNumber: 1,
          Description: "Mix 2 eggs and 1 cup milk"
        },
        {
          RecipeId: 2,
          StepNumber: 2,
          Description: "Add 1 cup flower to bowl."
        },
        {
          RecipeId: 2,
          StepNumber: 3,
          Description: "Cook delicious waffles or pancakes!"
        },
        {
          RecipeId: 3,
          StepNumber: 1,
          Description: "Mix 2 eggs, 4 cups flour, 1 bag chocolate chips"
        },
        { RecipeId: 3, StepNumber: 2, Description: "Heat oven to 365deg" },
        {
          RecipeId: 3,
          StepNumber: 3,
          Description: "Cook cookies until golden brown!"
        }
      ]);
    });
};
