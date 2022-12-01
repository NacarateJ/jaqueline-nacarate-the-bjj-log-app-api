/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex("users").insert([
    {
      id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      name: "Jaqueline Nacarate",
      email: "jaquelinenacarate@gmail.com",
      belt_color: "blue",
    },
  ]);
};
