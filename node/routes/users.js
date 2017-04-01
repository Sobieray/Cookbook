var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  db('users').then((users) => {
		res.send(users)
			//;
	}, next);
  
});

module.exports = router;
