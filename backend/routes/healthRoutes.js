const express = require('express');
const router = express.Router();

// Health Check Route
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Shekhani LLC Backend API Server',
    port: process.env.PORT || 5000,
    timestamp: new Date()
  });
});

module.exports = router;
