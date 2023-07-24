// installing necessary dependencies to set up the routes
const express = require("express");

// model import
const Notification = require("../models/notifications");

// setting up the router
const router = express.Router();

// post route for registering
router.post("/", async (req, res, next) => {
  try {
    // post the notification
    const notification = await Notification.createNotification(req.body);

    // return the user and the token as a json object
    return res.status(201).json({ notification: notification });
  } catch (err) {
    next(err);
  }
});

router.put("/:notificationId", async (req, res, next) => {
  try {
    // get the notificationId
    const { notificationId } = req.params;

    //update the intended notification
    const status = await Notification.notificationUpdater(notificationId);

    // return the user and the token as a json object
    return res.status(200).json({ message: status });
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    // get the notificationId
    const { userId } = req.params;

    //update the intended notification
    const notifications = await Notification.getNotificationsById(userId);

    // return the user and the token as a json object
    return res.status(200).json({ notifications: notifications });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
