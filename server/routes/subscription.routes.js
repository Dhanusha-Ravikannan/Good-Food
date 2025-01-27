const express = require('express');
const { getAllSubscription, createSubscription, getSubscription, getSubscriptionNames,  } = require('../controllers/subscription.controllers');
const router = express.Router();

router.get('/getAllSub',getAllSubscription)
router.get('/getSUB',getSubscription)
router.get('/names',getSubscriptionNames)
router.post('/createSub',createSubscription)
// router.get("/1234",getNames)

module.exports = router;