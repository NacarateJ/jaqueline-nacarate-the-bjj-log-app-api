const router = require("express").Router();
const usersController = require("../controllers/usersController");


router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.add);

router
  .route("/:id")
  .get(usersController.findOne)
  .patch(usersController.update)
  .delete(usersController.remove);

router
.route("/:id/videos")
.get(usersController.videos);

module.exports = router;