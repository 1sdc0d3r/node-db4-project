const knex = require("knex");

const configOptions = require("../knexfile");
const recipeBookDb = knex(configOptions.development);

module.exports = recipeBookDb;
