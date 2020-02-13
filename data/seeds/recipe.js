exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("Recipes")
      .truncate() //added in
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("Recipes").insert([
          { name: "Chicken Noodle" },
          { name: "Waffles" },
          { name: "Cookies" }
        ]);
      })
  );
};
