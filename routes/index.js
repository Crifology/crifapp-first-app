var express = require('express');
var router = express.Router();

const { sendPrivatePage } = require('../controllers/index');
const { authenticate } = require('../middleware/auth');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/private-page', authenticate, sendPrivatePage );


module.exports = router;
