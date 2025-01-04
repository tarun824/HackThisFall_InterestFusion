const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");
const {getAsync, setAsync, delAsync} = require("../config/redis");

const CACHE_DURATION = 3600;

// Route: GET /profile/view
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const userId = req.user.id;

    // Check Redis cache
    const cachedData = await getAsync(`user:${userId}`);
    if (cachedData) {
      console.log("✅ Serving from cache...");
      return res.json(JSON.parse(cachedData));
    }

    // Fetch data (assuming req.user contains the profile data)
    const user = req.user;

    // Cache the data
    await setAsync(`user:${userId}`, JSON.stringify(user), "EX", CACHE_DURATION);
    console.log("✅ Cached user data...");

    res.json(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Route: PATCH /profile/edit
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    // Update user profile
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();

    // Invalidate Redis cache
    await delAsync(`user:${loggedInUser.id}`);
    console.log("✅ Cache invalidated for user...");

    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;