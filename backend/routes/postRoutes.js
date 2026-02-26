const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/postControllers.js");

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
