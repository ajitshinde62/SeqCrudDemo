var express = require('express');
var router = express.Router();
const controller = require('../controller/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all',controller.getAll);
router.post('/Create',controller.create);

module.exports = router;
