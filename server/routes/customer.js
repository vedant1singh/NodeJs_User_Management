const express = require('express');
const router =  express.Router();
const customerContoller = require('../controllers/customerController');

router.get('/', customerContoller.homepage);

router.get('/add', customerContoller.addCustomer);
router.post('/add', customerContoller.postCustomer);
module.exports = router;