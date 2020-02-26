const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const home = `<h1>Hello World</h1>`;
  res
    .status(200)
    .send(home)
    .end();
});

module.exports = router;
