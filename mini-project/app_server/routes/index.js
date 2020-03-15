const express = require('express');
const router = express.Router();

const cntrPath = '../controllers/';
const cntrHome = require(cntrPath + 'home.js');

router.get('/', cntrHome.main);

module.exports = router;
