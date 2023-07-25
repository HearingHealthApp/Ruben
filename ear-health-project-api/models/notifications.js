//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const {
  convertSnakeToCamel,
  arrayConvertSnakeToCamel,
} = require("../utils/formatters");

// create class that holds all the functions pertaining to notifications
class Notification {
  // function that updates a notification to seen
  static async notificationUpdater(notificationId) {

    // update the respective notification to viewed
    const notificationQuery = `UPDATE notifications
    SET view_status = true
    WHERE notification_id = ${notificationId}; `;

    // await the query's execution
    const result = await db.query(notificationQuery);

    // return a successful status
    return "notification updated successfully";
  }

  // funtion that gets notifications based on the user ID provided
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
