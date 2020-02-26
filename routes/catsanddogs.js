const express = require('express'),
  router = express.Router();

const data = [
  { model: 'Hurrican', drive: 'AWD' },
  { model: 'P1 GTR', drive: 'AWD' }
];

router.get('/', (req, res) => {
  const dogCats = `<h1>Living together</h1>`;
  res.render('template', {
    locals: {
      title: 'foo page',
      arrayOfData: data
    },
    partials: {
      partial: 'partial-foo'
    }
  });
});

module.exports = router;
