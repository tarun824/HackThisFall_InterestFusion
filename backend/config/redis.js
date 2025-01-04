const redis = require("redis");
const { promisify } = require("util");

// Create Redis client
const redisClient = redis.createClient();

// Promisify Redis methods for easier use
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);

// Handle connection events
redisClient.on("connect", () => {
  console.log("✅ Connected to Redis...");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});

module.exports = { redisClient, getAsync, setAsync, delAsync };
