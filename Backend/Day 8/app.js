const express = require("express");
const app = express();
const port = 4000;
const fs = require("fs");
const obj = {
  id: 1,
  name: "Rutvik Gondekar",
  email: "rutvikgondekar@gmail.com",
  mobile: 9820879225,
};

const obj2 = {
  id: 2,
  name: "Yogiraj Sinde",
  email: "vu4f2223053@pvppcoe.ac.in",
  mobile: 9820879225,
};

app.get("/", (req, res) => {
  // fs.writeFileSync("data.json", JSON.stringify(obj));
  // fs.readFile("data.json", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(JSON.parse(data)); // res.send(`<button onClick="alert()" >Click me</button>`);
  //   }
  // });
  // fs.writeFileSync("data.json", JSON.stringify(obj) + "\n");
  // fs.appendFileSync("data.json", JSON.stringify(obj2) + "\n");

  // fs.appendFileSync("today.csv", "\n" + "7, 1444, umma, 963852741, 25-01-2025");

  // fs.readFile("today.csv", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     res.send(data);
  //   }
  // });
  // fs.unlinkSync("today.csv");
  // res.send(`<script>alert('file deleted')</script>`);
  res.end();
});

app.get("/student", (req, res) => {
  // fs.readFileSync("Final Batch List.csv", "utf-8", (data) => {
  //   res.write(data);
  // });
  fs.appendFileSync(
    "Final Batch List.csv",
    "\n" +
      "118,Vishal Dalani,a021vishaldalani@gmail.com,8265027522" +
      "\n" +
      "119, Umma Yadav, umma@ighal.com, 963852741" +
      "\n" +
      "120, Amrita Kadam, amu@bhesharam.com, 963858741"
  );

  fs.readFile("Final Batch List.csv", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
