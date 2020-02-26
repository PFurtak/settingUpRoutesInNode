const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(3333, () => {
  console.log('Server running on port 3333');
});

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
