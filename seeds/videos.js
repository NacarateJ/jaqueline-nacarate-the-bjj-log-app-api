/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('videos').del()
  await knex("videos").insert([
    {
      id: "",
      technique_name: "",
      description: "",
      users_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
    },
  ]);
};
