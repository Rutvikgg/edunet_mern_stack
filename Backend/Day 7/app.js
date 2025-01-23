const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());

const product = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/6126Ihs3N4L._AC_UL450_SR450,320_.jpg",
    title: "Godrej Aero",
    rating: 4.2,
    price: 259,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/41n0ALyjZYL._SX522_.jpg",
    title: "Involve Your Senses One Musk Organic Car Perfume",
    rating: 3.8,
    price: 369,
  },
];

app.get("/", (req, res) => {
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
