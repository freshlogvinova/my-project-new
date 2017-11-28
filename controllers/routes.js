const express = require('express');
const multiparty = require('multiparty');
const upload = require('./uploads');
const url = require('url');
const rimraf = require('rimraf');
const router = express.Router();

/* GET the different pages */
router.get('/', function (req, res) {
  res.render('dist/index.html');
});


module.exports = router;
