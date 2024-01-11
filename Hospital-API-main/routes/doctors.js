// 1. Import express.
const express = require('express');
const router = express.Router();
const doctor = require('../controllers/doctorController')

// 2. Initialize Express router.
router.post('/register', doctor.create)
router.post('/login', doctor.createSession)

module.exports = router;