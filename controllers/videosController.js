const { v4: uuidv4 } = require("uuid");
const knex = require("knex")(require("../knexfile"));


const findAll = (_req, res) => {
  knex("videos") //table name in my workbench
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving videos ${err}`));
};

const findOne = (req, res) => {
  knex("videos")
    .where({ id: req.params.id })
    .then((data) => {
      // If record is not found, respond with 404
      if (!data.length) {
        res.status(404).send(`Video with id: ${req.params.id} is not found`);
      }

      // Knex returns an array of records, so we need to send response with a single object only
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error retrieving video with ID: ${req.params.id} ${err}`)
    );
};

const add = (req, res) => {
  // Validate the request body for required data
  if (
    !req.body.technique_name ||
    !req.body.description||
    // !req.body.video_path ||
    !req.body.users_id
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to provide name, description and users_id fields in the request"
      );
  }

  const newVideoId = uuidv4();
  knex("videos")
    .insert({ ...req.body, id: newVideoId })
    .then((_data) => {
      knex("videos")
        .where({ id: newVideoId })
        .then((data) => {
          res.status(201).json(data[0]);
        });
    })
    .catch((err) => res.status(400).send(`Error creating video ${err}`));
};

const update = async (req, res) => {
  knex("videos")
    .where({ id: req.params.id })
    .update(req.body)
    .then((_data) => {
      knex("videos")
        .where({ id: req.params.id })
        .then((data) => {
          res.status(200).json(data[0]);
        });
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error updating video with ID: ${req.params.id} ${err}`)
    );
};

const remove = async (req, res) => {
  knex("videos")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(200).json({
        deletedVideoId: req.params.id,
      });
    })
    .catch((err) =>
      res
        .status(400)
        .send(`Error deleting video with ID: ${req.params.id} ${err}`)
    );
};

module.exports = {
  findAll,
  findOne,
  add,
  update,
  remove,
};