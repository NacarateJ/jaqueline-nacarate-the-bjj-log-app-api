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
  const newVideoId = uuidv4();
  console.log(req.body);
  knex("videos")
    .insert({ ...req.body, id: newVideoId, video:req.file.firebaseUrl })
    .then(() => {
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
    .then(() => {
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