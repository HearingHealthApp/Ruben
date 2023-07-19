// installing necessary dependencies to set up the routes
const express = require("express");

//model import
const Forum = require("../models/forum");

// setting up the router
const router = express.Router();

//post route for creating a post
router.post("/post", async (req, res, next) => {
  try {
    const post = await Forum.createPost(req.body);

    return res.status(201).json({ post: post });
  } catch (err) {
    next(err);
  }
});



//get route to get all the forum posts and load them
router.get("/:pageNum", async (req, res, next) => {
  try {
    const {pageNum} = req.params

    const posts = await Forum.getAllPosts(pageNum);
    
    return res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
});

//get route to get all the forum posts pertaining to a specific userID
router.get("/:userID", async (req, res, next) => {
  try {
    let userOffset = 0;

    const userID = req.params.userID;

    const userPosts = await Forum.getAllPostsByUserID(userOffset, userID);

    return res.status(200).json({ userPosts });
  } catch (err) {
    next(err);
  }
});

//get route to get a specific forum post 
router.get("/post/:postId", async (req,res,next) => {
  try {
  const postId = req.params.postId

  const post = await Forum.getPostByID(postId)

  return res.status(200).json({post})
  } catch(err) {
    next(err)
  }
})

module.exports = router;
