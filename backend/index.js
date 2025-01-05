const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
const { redisClient } = require("./config/redis"); // Import Redis client

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

const app = express();
const PORT = 7777;

// Allowed origins for CORS
const allowedOrigins = [
  "https://intrest-fusion-frontend.vercel.app",
  "https://another-frontend.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Database and Redis connection, then server initialization
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connection established...");

    // Initialize Redis connection
    //Uncomment this when you need redis caching
    // redisClient.connect(); // Explicitly connect if using Redis 4.x+
    // console.log("✅ Redis connection established...");

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}...`);
    });
  } catch (err) {
    console.error("❌ Failed to start the server:", err.message);
  }
};

startServer();
