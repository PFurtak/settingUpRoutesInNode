const express = require('express'),
  router = express.Router(),
  ceoModel = require('../models/ceoModel');

router.get('/', async (req, res) => {
  const executiveData = await ceoModel.getAll();

  console.log(executiveData);
  res.render('template', {
    locals: {
      title: 'Apple CEOs',
      arrayOfData: executiveData
    },
    partials: {
      partial: 'partial-ceos'
    }
  });
});

module.exports = router;
