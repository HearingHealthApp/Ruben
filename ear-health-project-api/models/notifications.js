//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const convertSnakeToCamel = require("../utils/formatters");

class Notification {
  // create function that adds notification to notification table
  static async createNotification(notificationData) {
    // check that all fields are there
  }

  static async notificationUpdater(notificationId) {

  }

  static async getNotificationsById(userId) {

  }


}
