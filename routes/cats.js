const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const cats = `<h1>Meow</h1>`;
  res.render('template', {
    locals: {
      title: 'Cat Page!'
    },
    partials: {
      partial: 'partial-cat'
    }
  });
});

module.exports = router;
