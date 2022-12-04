const { v4: uuidv4 } = require("uuid");
const knex = require("knex")(require("../knexfile"));

const findAll = (_req, res) => {
  knex("users") //table name in my workbench
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving users ${err}`);
    });
};

const findOne = (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
         res
          .status(404)
          .send(`Error retrieving user with ID: ${req.params.id} `);
      }

      // knex returns matched rows inside of an array.
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving user ${err}`);
    });
};


const videos = (req, res) => {
  knex("users")
    .join("videos", "videos.user_id", "users.id")
    .where({ user_id: req.params.id })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res
        .status(400)
        .send(
          `Error retrieving videos for user with ID: ${req.params.id} ${err}`
        )
    );
};


const add = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.belt_color) {
    return res
      .status(400)
      .send("Please provide name, email and belt color in the request");
  }

  const newUserId = uuidv4();
  knex("users")
    .insert({ ...req.body, id: newUserId })
    .then((_data) => {
      // knex does not respond back with new row Id when adding entries
      // so we are maintaining our own uuid in server
      knex("users")
        .where({ id: newUserId })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch((err) => res.status(400).send(`Error creating user ${err}`));
};

const update = async (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .update(req.body)
    .then((_data) => {
      knex("users")
        .where({ id: req.params.id })
        .then((data) => {
          res.status(200).json(data[0]);
        });
    });
};

const remove = async (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .del()
    .then(() => {
      res.status(200).json({ deletedVideotId: req.params.id });
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error deleting user with ID: ${req.params.id} ${err}`)
    );
};

module.exports = {
  findAll,
  findOne,
  videos,
  add,
  update,
  remove,
};