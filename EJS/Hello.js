const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");


app.get('/', (req, res) => res.render("hello", {
  message: "Hello World"
 })
);

app.listen(3000, () => console.log(`Application started listening on port 3000!`));