import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";
dotenv.config();

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ sucess: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

//Get single Post
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ sucess: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// Create A Post
const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    consol.log(newPost);

    res.status(201).json({ sucess: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export { createPost, getAllPosts, getSinglePost };
