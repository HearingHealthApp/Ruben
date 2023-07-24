//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const convertSnakeToCamel = require("../utils/formatters");

class Notification {
    // create function that adds notification to notification table
    static async  createNotification () {
        // check that all fields are there 
    }
}