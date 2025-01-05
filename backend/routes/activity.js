// routes/activityRoutes.js
const express = require('express');
const ActivityLog = require('../models/ActivityLog');
const router = express.Router();

// Get all activity logs or filter by endpoint
router.get('/logs', async (req, res) => {
  try {
    const { endpoint, method } = req.query; // Optional query params
    const query = {};
    if (endpoint) query.endpoint = endpoint;
    if (method) query.method = method;

    const logs = await ActivityLog.find(query).sort({ timestamp: -1 }); // Most recent first
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching logs' });
  }
});

module.exports = router;
