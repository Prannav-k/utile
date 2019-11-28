const express = require('express');
const router  = express.Router();

var logger = helper.getLogger('TxnService');
var config = require('../config');

const txnService = require('../services/txnService');


router.get('/', txnService.getTxns);
router.post('/',txnService.addTxn);


module.exports=router;
