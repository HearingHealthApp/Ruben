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

    return res.status(200).json({ user, userComments, userPosts });
  } catch (err) {
    next(err);
  }
});

//put route to update the user's description
router.put("/description/:userId", async (req, res, next) => {
  try {
    //what we need from the request
    const { userId } = req.params;
    const description = req.body.description;

    const updatedDesc = await Profile.updateUserDescription(
      description,
      userId
    );

    return res.status(200).json(updatedDesc);
  } catch (err) {
    next(err);
  }
});

//put route to update the user's array of conditions
router.put("/conditions/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const condition = req.body.condition;

    const updatedConditionsArray = await Profile.addCondition(
      condition,
      userId
    );

    return res.status(200).json(updatedConditionsArray);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
