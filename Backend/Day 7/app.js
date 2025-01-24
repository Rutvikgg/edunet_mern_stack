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

const kids = [
  {
    id: 1,
    title:
      "Googo Gaaga Boy's Cotton full Sleeves Printed Sweatshirt and Pant Set in Multi Color",
    img: "https://m.media-amazon.com/images/I/517+8nArL8L._SX679_.jpg",
    rating: 3.8,
    price: 420,
  },

  {
    id: 2,
    title:
      "British Kings Boys Designer Set 100% Cotton Long Sleeve T shirt Round neck",
    img: "https://m.media-amazon.com/images/I/511zuBf1vxL._SX679_.jpg",
    rating: 4.0,
    price: 499,
  },
  {
    id: 3,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
  {
    id: 4,
    title:
      "Googo Gaaga Boy's Cotton full Sleeves Printed Sweatshirt and Pant Set in Multi Color",
    img: "https://m.media-amazon.com/images/I/517+8nArL8L._SX679_.jpg",
    rating: 3.8,
    price: 420,
  },

  {
    id: 5,
    title:
      "British Kings Boys Designer Set 100% Cotton Long Sleeve T shirt Round neck",
    img: "https://m.media-amazon.com/images/I/511zuBf1vxL._SX679_.jpg",
    rating: 4.0,
    price: 499,
  },
  {
    id: 6,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
  {
    id: 7,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
  {
    id: 8,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
  {
    id: 9,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
  {
    id: 10,
    title:
      "minicult Cotton Pajama Pants with All Over Print for Boys and Girls",
    img: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._SX679_.jpg",
    rating: 4.0,
    price: 799,
  },
];

const mens = [
  {
    id: 1,
    title:
      "CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt",
    img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY741_.jpg",
    rating: 4.0,
    price: 455,
  },

  {
    id: 2,
    title: "Vogaan Men's T-Shirt and Shorts Set ",
    img: "https://m.media-amazon.com/images/I/71NqdiLq8jL._SY741_.jpg",
    rating: 4.7,
    price: 494,
  },
  {
    id: 3,
    title: "TAGAS Men's Regular Jacket Fit For Casual Wear ",
    img: "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
    rating: 3.8,
    price: 699,
  },
  {
    id: 4,
    title:
      "CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt",
    img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY741_.jpg",
    rating: 4.0,
    price: 455,
  },

  {
    id: 5,
    title: "Vogaan Men's T-Shirt and Shorts Set ",
    img: "https://m.media-amazon.com/images/I/71NqdiLq8jL._SY741_.jpg",
    rating: 4.7,
    price: 494,
  },
  {
    id: 6,
    title: "TAGAS Men's Regular Jacket Fit For Casual Wear ",
    img: "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
    rating: 3.8,
    price: 699,
  },
  {
    id: 7,
    title:
      "CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt",
    img: "https://m.media-amazon.com/images/I/51-pLhPHoBL._SY741_.jpg",
    rating: 4.0,
    price: 455,
  },

  {
    id: 8,
    title: "Vogaan Men's T-Shirt and Shorts Set ",
    img: "https://m.media-amazon.com/images/I/71NqdiLq8jL._SY741_.jpg",
    rating: 4.7,
    price: 494,
  },
  {
    id: 9,
    title: "TAGAS Men's Regular Jacket Fit For Casual Wear ",
    img: "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
    rating: 3.8,
    price: 699,
  },
  {
    id: 10,
    title: "TAGAS Men's Regular Jacket Fit For Casual Wear ",
    img: "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
    rating: 3.8,
    price: 699,
  },
];

const womens = [
  {
    id: 1,
    title:
      "Sun Fashion And Lifestyle Women's Chanderi Stitched Printed Kurti for Girls Kurta",
    img: "https://m.media-amazon.com/images/I/41PrpVP+5fL._SY741_.jpg",
    rating: 3.6,
    price: 499,
  },

  {
    id: 2,
    title:
      "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
    img: "https://m.media-amazon.com/images/I/61SgADmAyDL._SY741_.jpg",
    rating: 3.9,
    price: 659,
  },
  {
    id: 3,
    title:
      "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta ",
    img: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
    rating: 3.8,
    price: 769,
  },
  {
    id: 4,
    title:
      "Sun Fashion And Lifestyle Women's Chanderi Stitched Printed Kurti for Girls Kurta",
    img: "https://m.media-amazon.com/images/I/41PrpVP+5fL._SY741_.jpg",
    rating: 3.6,
    price: 499,
  },

  {
    id: 5,
    title:
      "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
    img: "https://m.media-amazon.com/images/I/61SgADmAyDL._SY741_.jpg",
    rating: 3.9,
    price: 659,
  },
  {
    id: 6,
    title:
      "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta ",
    img: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
    rating: 3.8,
    price: 769,
  },
  {
    id: 7,
    title:
      "Sun Fashion And Lifestyle Women's Chanderi Stitched Printed Kurti for Girls Kurta",
    img: "https://m.media-amazon.com/images/I/41PrpVP+5fL._SY741_.jpg",
    rating: 3.6,
    price: 499,
  },

  {
    id: 8,
    title:
      "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
    img: "https://m.media-amazon.com/images/I/61SgADmAyDL._SY741_.jpg",
    rating: 3.9,
    price: 659,
  },
  {
    id: 9,
    title:
      "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta ",
    img: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
    rating: 3.8,
    price: 769,
  },
  {
    id: 10,
    title:
      "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta ",
    img: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
    rating: 3.8,
    price: 769,
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the home page" });
});

app.get("/kids", (req, res) => {
  res.json(kids);
});

app.get("/mens", (req, res) => {
  res.json(mens);
});

app.get("/womens", (req, res) => {
  res.json(womens);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
