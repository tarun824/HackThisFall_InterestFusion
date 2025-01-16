// routes/activityRoutes.js
const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const router = express.Router();
const { redisClient } = require("./../config/redis");
const mongoose = require("mongoose");

// Get all activity logs or filter by endpoint
router.get("/logs", async (req, res) => {
  try {
    const { endpoint, method } = req.query; // Optional query params
    const query = {};
    if (endpoint) query.endpoint = endpoint;
    if (method) query.method = method;

    const logs = await ActivityLog.find(query).sort({ timestamp: -1 }); // Most recent first
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching logs" });
  }
});

router.get("/health", (req, res) => {
  let mongoDbConnectionStatus;
  let redisConnectionStatus;
  try {
    // checking MongoDB connection
    mongoDbConnectionStatus = mongoose.connection.readyState;
    // checking Redis connection
    redisConnectionStatus = redisClient.isReady;
    console.log(redisConnectionStatus);
  } catch (e) {
    res.send({
      message: "There is an issue with connections.",
      mondoDB:
        mongoDbConnectionStatus === 1
          ? "MongoDB is operational."
          : "MongoDB is not operational.",
      Redis: redisConnectionStatus
        ? "Redis is operational."
        : "Redis is not operational.",
    });
  }
  if (mongoDbConnectionStatus === 1 && redisConnectionStatus) {
    res
      .status(200)
      .send({ message: "Both MongoDB and Redis are operational." });
  } else {
    res.send({
      message: "There is an issue with connections.",
      mondoDB:
        mongoDbConnectionStatus === 1
          ? "MongoDB is operational."
          : "MongoDB is not operational.",
      Redis: redisConnectionStatus
        ? "Redis is operational."
        : "Redis is not operational.",
    });
  }
});

module.exports = router;
