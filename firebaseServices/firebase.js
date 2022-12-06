
var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

const BUCKET = "the-bjj-logapp.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadVideo = (req, res, next) => {
  const video = req.file;
  const fileName = Date.now() + "." + video.originalname.split(".").pop();

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
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileName}`;

    next();
});

stream.end(video.buffer);
    
};

module.exports = uploadVideo;
