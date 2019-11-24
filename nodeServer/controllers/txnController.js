const express = require('express');
const router  = express.Router();

const txnService = require('../services/txnService');


router.get('/', txnService.getTxns);
router.post('/',txnService.addTxn);


module.exports=router;
