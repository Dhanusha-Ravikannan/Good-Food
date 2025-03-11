const express = require("express");
const { getKey, createOrderAndSubscription, updatePaymentStatus } = require("../controllers/paymentController");
const router = express.Router();

router.post("/razorPay", createOrderAndSubscription);
router.get('/getKey',getKey)
router.post('/update',updatePaymentStatus )

module.exports = router;
