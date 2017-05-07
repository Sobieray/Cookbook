var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router
.get('/', (req, res, next) => {
  db('recipes').then((users) => {
		res.send(users)
			//;
	}, next)
})

module.exports = router;