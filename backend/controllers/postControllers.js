const Post = require("../models/Post.js");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch posts" });
  }
};
const createPost = async (req, res) => {
  try {
    const { author, title, content } = req.body;
    const savedPost = await Post.create({ author, title, content });
    res.status(201).json({message:'post created successfully',post:savedPost});
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

module.exports = { getPosts, createPost };
