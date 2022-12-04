const router = require("express").Router();
const videosController = require("../controllers/videosController");


router
.route("/")
.get(videosController.findAll)
.post(videosController.add);

router
  .route("/:id")
  .get(videosController.findOne)
  .patch(videosController.update)
  .delete(videosController.remove);

module.exports = router;