/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("videos", (table) => {
    table.uuid("id").primary(); // primary key for video row
    table.string("technique_name").notNullable();
    table.string("description", 2000).notNullable();
    table.string("video", 100).notNullable();
    table
      .uuid("user_id") // user_id is the foreign key
      .notNullable()
      .references("id") // refers to 'id' column in users table
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("videos");
};
