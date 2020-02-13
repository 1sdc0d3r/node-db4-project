const knex = require("knex");

const knexConfig = knex("../knexfile".development);

module.exports = knexConfig;
