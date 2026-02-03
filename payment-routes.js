const express = require('express');
const router = express.Router();
const {
  createPaymentIntent,
  stripeWebhook,
  getStripeConfig
} = require('../controllers/payment.controller');
const { protect } = require('../middleware/auth.middleware');

// Public routes
router.get('/config', getStripeConfig);

// Webhook route (raw body needed)
router.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook);

// Protected routes
router.post('/create-intent', protect, createPaymentIntent);

module.exports = router;