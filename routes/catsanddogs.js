const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const dogCats = `<h1>Living together</h1>`;
  res
    .status(200)
    .send(dogCats)
    .end();
});

module.exports = router;
