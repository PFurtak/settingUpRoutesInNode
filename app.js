const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

// const greetRoute = (req,res) => {
//   const greeting = `<h1>Hello, ${}</h1>`;
//   res.status(200).send(greeting).end();
// }

const rootController = require('./routes/index'),
  catsController = require('./routes/cats'),
  dogsController = require('./routes/dogs'),
  catsanddogsController = require('./routes/catsanddogs'),
  personController = require('./routes/person');

app.use('/', rootController);
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/catsanddogs', catsanddogsController);
app.use('/person', personController);
