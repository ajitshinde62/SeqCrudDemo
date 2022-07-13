var express = require('express');
var {body}=require('express-validator');
var router = express.Router();
const controller = require('../controller/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all',controller.getAll);
router.post('/Create',[body('Name').notEmpty().withMessage('Name is required').isLength({min:2, max:150}).isAlpha().withMessage('Please enter a valid Name'),
body('Mobile').notEmpty().withMessage('Mobile is required').isLength({min:10, max:10}).isNumeric().withMessage('Please enter a valid Mobile Number')
]
,controller.create);

module.exports = router;
