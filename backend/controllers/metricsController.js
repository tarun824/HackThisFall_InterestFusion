// controllers/metricsController.js
const client = require("prom-client");

// Fetch Prometheus metrics
const getMetrics = async (req, res) => {
  try {
    res.setHeader("Content-Type", client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
  } catch (error) {
    console.error("Error fetching metrics:", error);
    res.status(500).json({ error: "Error fetching metrics" });
  }
};

module.exports = {
  getMetrics,
};
