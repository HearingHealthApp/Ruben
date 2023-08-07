// installing necessary dependencies to set up the routes
const express = require("express");

//model import
const Forum = require("../models/forum");
const User = require("../models/user");

// setting up the router
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {

    const posts = await Forum.getAllPost();

    if (posts.length == 0) {
      return res.status(200).json({ test :'testing route' })
    } else {
      return res.status(200).json({ posts });
    }
    
  } catch (err) {
    next(err);
  }
});

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

  const userImage = await User.getUserImage(post.userId)

  return res.status(200).json({post, userImage})
  } catch(err) {
    next(err)
  }

})

module.exports = router;
