const { v2: cloudinary } = require('cloudinary');
require("dotenv").config();  // Add this line to load .env variables
console.log(process.env.API_KEY,process.env.API_SECRET, process.env.CLOUD_NAME)
const uploadOnCloudinary = async (path) => {
  // Configure Cloudinary
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET, // Replace this with an environment variable for security
  });

  try {
    // Upload the image
    const uploadResult = await cloudinary.uploader.upload(path);
    console.log('Upload Result:', uploadResult);
    return uploadResult;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error; // Throw error to let calling function handle it
  }
};

module.exports = { uploadOnCloudinary };
