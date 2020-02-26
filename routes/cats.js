const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const cats = `<h1>Meow</h1>`;
  res
    .status(200)
    .send(cats)
    .end();
});

module.exports = router;
