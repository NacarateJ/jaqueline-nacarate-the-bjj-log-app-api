var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

const BUCKET = "the-bjj-logapp.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadVideo = (req, res, next) => {
  console.log(req.video);
  if (
    !req.body.technique_name ||
    !req.body.description ||
    !req.file ||
    !req.body.user_id
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to provide technique name, description and users_id fields in the request"
      );
  }

  const video = req.file;
  const fileName = Date.now()
   + "." + video.originalname.split(".").pop();

  console.log(video);

  const file = bucket.file(fileName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: video.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    // make the file public
    await file.makePublic();

    // get the public URL
    // req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileName}`;
    
    req.file.firebaseUrl = `https://ik.imagekit.io/jndsbsm/${fileName}`;


    next();
  });

  stream.end(video.buffer);
};

module.exports = uploadVideo;
