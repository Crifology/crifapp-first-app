var express = require('express');
var router = express.Router();
const {login, loginPage} = require('../controllers/users');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', loginPage)
router.post('/login', login)

module.exports = router;

// use token to access private information/server location