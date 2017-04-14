var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router
.get('/', (req, res, next) => {
  db('users').then((users) => {
		res.send(users)
			//;
	}, next)
})
.post('/', (req, res, next) => {
	db('users')
		.insert(req.body)
		.then((userIds) => {
			res.send(userIds);
		//;
	}, next);
})

module.exports = router;
