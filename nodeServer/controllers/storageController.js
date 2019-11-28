const express = require('express');
const router = express.Router();
var logger = helper.getLogger('StorageController');
var config = require('../config');

const storageService = require('../services/storageService');

router.get('/',function(req,res,next){
    logger.info("Got req to get all storages")

});
router.post('/',storageService.addStorage);
router.put('/',storageService.upgradeStorage);

module.exports = router ;