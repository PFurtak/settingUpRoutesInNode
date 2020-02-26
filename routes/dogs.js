const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const dogs = `<h1>Woof</h1>`;
  res
    .status(200)
    .send(dogs)
    .end();
});

module.exports = router;
