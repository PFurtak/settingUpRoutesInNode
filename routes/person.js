const express = require('express'),
  router = express.Router();

router.get('/:name?', (req, res) => {
  console.log('url paramerters are: ', req.params);

  const { name } = req.params;

  res
    .status(200)
    .send(`<h1>Hello ${name}</h1>`)
    .end();
});

module.exports = router;
