const express = require("express");
const http = require("http"); // Import HTTP to attach WebSocket
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/database");
const { redisClient } = require("./config/redis");
const logger = require("./utils/logger");
const errorHandler = require("./middlewares/errorhandler");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const analyticsLogger = require("./utils/analyticsLogger");
const activity = require("./routes/activity");
const metricsRouter = require("./routes/metrics");
const client = require("prom-client");
const responseTime = require("response-time");

const app = express();
const PORT = process.env.PORT || 7777;

// Create HTTP server
const server = http.createServer(app);

// Middleware and Routes (your existing code remains unchanged)
app.use(
  cors({
    origin: [
      "https://intrest-fusion-frontend.vercel.app",
      "https://another-frontend.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5000,
  message: "Too many requests, please try again later.",
});
app.use(apiLimiter);
app.use(express.json());
app.use(cookieParser());
app.use(analyticsLogger);
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/api/", activity);
app.use("/", metricsRouter);
app.use(errorHandler);

// Database connection and server start
const startServer = async () => {
  try {
    await connectDB();
    logger.info("Database connection established...");
    // redisClient.connect(); // Uncomment if Redis is needed
    logger.info("Redis connection established...");

    // Start the server with WebSocket
    server.listen(PORT, () => {
      logger.info(`🚀 Server is running on port ${PORT}...`);
    });
  } catch (err) {
    logger.error("❌ Failed to start the server:", err.message);
  }
};

startServer();
