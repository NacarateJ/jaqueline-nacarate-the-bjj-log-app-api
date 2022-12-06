require("dotenv").config();


const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 5500;

const usersRoutes = require("./routes/usersRoutes");
const videosRoutes = require("./routes/videosRoutes");


// middlewares
app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/videos", videosRoutes);


app.get("/", (req, res) => {
  res.status(200).send("Welcome to The BJJ LogApp");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
