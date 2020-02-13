exports.up = function(knex) {
  return knex.schema
    .createTable("Recipes", tbl => {
      tbl.increments(); //? (1, 1) incrementCount, start at
      tbl.string("name").notNullable();
      // tbl
      //   .integer("stepId")
      //   .unsigned()
      //   .notNullable()
      //   .references("Steps.id");
    })
    .createTable("Ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 128);
    })
    .createTable("Steps", tbl => {
      tbl.increments();
      tbl
        .integer("RecipeId")
        .unsigned()
        .notNullable()
        .references("Recipes.id");
      tbl
        .integer("StepNumber")
        .unsigned()
        .notNullable();
      tbl.string("Description", 256);
    })
    .createTable("Book", tbl => {
      tbl.increments();
      tbl
        .integer("RecipeId")
        .unsigned()
        .notNullable()
        .references("Recipes.id");
      tbl
        .integer("IngredientId")
        .unsigned()
        .notNullable()
        .references("Ingredients.id");
      tbl.float("Quantity");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Book")
    .dropTableIfExists("Steps")
    .dropTableIfExists("Ingredients")
    .dropTableIfExists("Recipes");
};
