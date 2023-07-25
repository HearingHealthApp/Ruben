//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const {
  convertSnakeToCamel,
  arrayConvertSnakeToCamel,
} = require("../utils/formatters");

// create class that holds all the functions pertaining to notifications
class Notification {
  // create function that adds notification to notification table
  static async createNotification(notificationData) {
    // create an array that holds the keys of the values we expect from
    // the front end
    const requiredFields = [
      "userId",
      "postId",
      "commentId",
      "parent",
      "action",
      "username",
    ];

    // iterate through the required fields and check if one is missing
    // if so, throw an error
    requiredFields.forEach((field) => {
      if (!notificationData.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //create our query
    const notificationQuery = `
        INSERT INTO notifications (user_id, post_id, comment_id, parent, action, username)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `;

    //values we will be assigning to our query
    const values = [
      notificationData.userId,
      notificationData.postId,
      notificationData.commentId,
      notificationData.message
    ];

    // posting to the db
    const result = await db.query(notificationQuery, values);

    // converting the returned data to camel case
    const notification = convertSnakeToCamel(result.rows[0]);

    return notification;
  }

  static async notificationUpdater(notificationId) {
    const notificationQuery = `UPDATE notifications
    SET view_status = true
    WHERE notification_id = ${notificationId}; `;

    const result = await db.query(notificationQuery);

    return "notification updated successfully";
  }

  static async getNotificationsById(userId) {
    // throw an error if no username is provided
    if (!userId) {
      throw new BadRequestError("No user ID provided");
    }

    // select from the users table the the user that matches the username
    const query = `SELECT * FROM notifications WHERE user_id = $1`;

    // convert the provided username to all lowercase and use it as the reference
    // username in the query
    const result = await db.query(query, [userId]);

    const notifications = arrayConvertSnakeToCamel(result.rows);

    return notifications;
  }
}

module.exports = Notification;