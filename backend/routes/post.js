const express = require("express");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, author: req.user.id });
  await post.save();
  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
});

module.exports = router;
