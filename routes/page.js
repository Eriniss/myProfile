const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('main', {
    title: 'My Profile',
  });
});

module.exports = router;