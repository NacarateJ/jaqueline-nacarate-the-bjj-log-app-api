/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
      table.uuid("id").primary();
       table.string("profile_image", 50).notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("belt_color").notNullable().defaultTo("White");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
