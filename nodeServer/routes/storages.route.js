const express = require('express');
const router = express.Router();

const storageController = require('../controllers/storages.controller');

router.get('/storage',storageController.test);

module.exports = router ;