const express = require("express");

const metricsRouter = express.Router();
const client = require("prom-client");

metricsRouter.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", client.register.contentType);
  const metrics = await client.register.metrics();
  res.send(metrics);
});

module.exports = metricsRouter;
