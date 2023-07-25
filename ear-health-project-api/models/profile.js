//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const {convertSnakeToCamel} = require("../utils/formatters");

class Profile {
  //get the comments of a particular user
  static async getUserComments(userId) {
    if (!userId) {
      throw new BadRequestError("No id provided");
    }

    //create the user query
    const commentsQuery = `SELECT * FROM comments WHERE user_id = $1`;

    //give the value of userId
    const value = [userId];

    //execute the query
    const result = await db.query(commentsQuery, value);

    const convertedData = [];

    result.rows.forEach((data) =>
      convertedData.push(convertSnakeToCamel(data))
    );

    return convertedData;
  }

  //get the posts of a particular user
  static async getUserPosts(userId) {
    if (!userId) {
      throw new BadRequestError("No id provided");
    }

    //create the user query
    const postsQuery = `SELECT * FROM posts WHERE user_id = $1`;

    //give the value of userId
    const value = [userId];

    //execute the query
    const result = await db.query(postsQuery, value)

    //convert data to camelcase
    const convertedData = [];

    result.rows.forEach((data) =>
      convertedData.push(convertSnakeToCamel(data))
    );

    return convertedData;
  }

  //get an individual user by their id
  static async getUser(userId) {
    if (!userId) {
      throw new BadRequestError("No id provided");
    }

    //create the user query
    const userQuery = `SELECT * FROM users WHERE user_id = $1`;

    //give the value of userId
    const value = [userId];

    //execute the query
    const result = await db.query(userQuery, value);

    return convertSnakeToCamel(result.rows[0]);
  }
}

module.exports = Profile;
