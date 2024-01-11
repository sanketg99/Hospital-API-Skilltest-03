// 1. Import express.
const express = require('express');
const router = express.Router();
const passport = require('passport');
const status= require('../controllers/status')

// 2. Initialize Express router.
router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports)

module.exports = router;