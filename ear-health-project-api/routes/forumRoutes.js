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

//global var for offset
let offset = 0;

//get route to get all the forum posts and load them
router.get("/", async (req, res, next) => {
  try {

    const posts = await Forum.getAllPosts(offset);
    offset += 5;

    return res.status(200).json({ posts });

  } catch (err) {
    next(err);
  }
});

//get route to get all the forum posts pertaining to a specific userID 
router.get("/:userID", async (req,res,next) => {
    try {

        let userOffset = 0

        const userID = req.params.userID

        const userPosts = await Forum.getAllPostsByUserID(userOffset, userID)

        return res.status(200).json({userPosts})
    } catch(err) {
        next(err)
    }
})

module.exports = router;
