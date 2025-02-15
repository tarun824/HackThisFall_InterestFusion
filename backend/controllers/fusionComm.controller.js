const fusionUser = require("../models/fusionUser");
const fusionPost = require("../models/fusionPost");

// Register a new user
const fusionRegister = async (req, res) => {
    try {
        const { name, uname, password } = req.body;

        if (!name || !uname || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await fusionUser.findOne({ uname });

        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        const newUser = new fusionUser({
            name,
            uname,
            password, // Storing password as plain text (not recommended in production)
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Login User
const fusionSignup = async (req, res) => {
    try {
        const { uname, password } = req.body;

        if (!uname || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await fusionUser.findOne({ uname });

        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Publish a new post
const fusionPublishpost = async (req, res) => {
    try {
        const { userId, title, content } = req.body;

        if (!userId || !title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await fusionUser.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newPost = new fusionPost({
            userId,
            title,
            content,
            createdAt: new Date(),
        });

        await newPost.save();

        res.status(201).json({ message: "Post published successfully", post: newPost });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { fusionRegister, fusionSignup, fusionPublishpost };
