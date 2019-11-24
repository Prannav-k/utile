const express = require('express');
const router = express.Router();

const storageService = require('../services/storageService');

router.get('/',storageService.getStorages);
router.post('/',storageService.addStorage);
router.put('/',storageService.upgradeStorage);

module.exports = router ;