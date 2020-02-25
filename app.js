const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

const rootRoute = (req, res) => {
  const home = `<h1>Hello World</h1>`;
  res
    .status(200)
    .send(home)
    .end();
};

const catsRoute = (req, res) => {
  const cats = `<h1>Meow</h1>`;
  res
    .status(200)
    .send(cats)
    .end();
};

const dogsRoute = (req, res) => {
  const dogs = `<h1>Woof</h1>`;
  res
    .status(200)
    .send(dogs)
    .end();
};

const dogCatsRoute = (req, res) => {
  const dogCats = `<h1>Living together</h1>`;
  res
    .status(200)
    .send(dogCats)
    .end();
};

const greetRoute = (req,res) => {
  const greeting = `<h1>Hello, ${}</h1>`;
  res.status(200).send(greeting).end();
}


app.get('/', rootRoute);
app.get('/cats', catsRoute);
app.get('/dogs', dogsRoute);
app.get('/cats_and_dogs', dogCatsRoute);
app.get('/greet/', greetRoute);
