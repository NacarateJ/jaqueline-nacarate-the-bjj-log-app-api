const router = require("express").Router();
const videosController = require("../controllers/videosController");
const uploadVideo = require("../firebaseServices/firebase");
const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  // can set up a video size limit here as well
})

router
.route("/")
.get(videosController.findAll)
.post(Multer.single("video"), uploadVideo, videosController.add);

router
  .route("/:id")
  .get(videosController.findOne)
  .patch(videosController.update)
  .delete(videosController.remove);

module.exports = router;