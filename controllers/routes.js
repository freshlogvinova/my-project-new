var express = require('express');
var router = express.Router();

var db = require('./db_connect');

router.get('/',  function (req, res) {
  res.render('dist/index.html');
 });

router.post('/atom', db.getAllDeveloper);
router.post('/comment', db.setDeveloper);
// router.get('/api/puppies/:id', db.getSinglePuppy);
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
