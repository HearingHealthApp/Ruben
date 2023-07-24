// installing necessary dependencies to set up the routes
const express = require("express");

//model import
const Profile = require("../models/profile");

// setting up the router
const router = express.Router();

//get route that gets all user information
router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    //get the user
    const user = await Profile.getUser(userId);
    //get their comments
    const userComments = await Profile.getUserComments(userId);
    //get their posts
    const userPosts = await Profile.getUserPosts(userId);

    return res.status(200).json({user, userComments, userPosts});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
