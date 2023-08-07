// installing necessary dependencies to set up the routes
const express = require("express");

//model import
const Comments = require("../models/comments");

// setting up the router
const router = express.Router();

//post route for adding a comment to a post

router.post("/add", async (req, res, next) => {
  try {
    const addComment = await Comments.postComment(req.body);

    return res.status(201).json({ addComment });
  } catch (err) {
    next(err);
  }
});

//get route for loading all comments from a specific forum post

router.get("/:postID", async (req, res, next) => {
  try {
    const { postID } = req.params;

    const comments = await Comments.loadAllForumComments(postID);

    return res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
});

router.get("/comment/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await Comments.getUserFromComment(userId);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
