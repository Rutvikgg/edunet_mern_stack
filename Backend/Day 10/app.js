const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const cors = require("cors");

app.use(cors());

mongoose.connect("mongodb://localhost:27017/movies").then(() => {
  console.log("DB is connected");
});

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  img: String,
  actor: String,
  actoress: String,
  rating: String,
});

const Movies2015 = mongoose.model("Movies2015", movieSchema);

app.get("/movies", (req, res) => {
  Movies2015.find().then((movies) => {
    res.json(movies);
  });
  // res.send("Movies list");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
