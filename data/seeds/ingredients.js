exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Ingredients").insert([
        { name: "egg" },
        { name: "flour" },
        { name: "milk" },
        { name: "chicken" },
        { name: "water" },
        { name: "chocolate chips" }
      ]);
    });
};
