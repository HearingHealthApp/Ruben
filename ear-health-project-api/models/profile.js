//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { convertSnakeToCamel } = require("../utils/formatters");
const User = require("./user");

class Profile {
  //get the comments of a particular user
  static async getUserComments(userId) {
    if (!userId) {
      throw new BadRequestError("No id provided");
    }

    //create the user query
    const commentsQuery = `SELECT * FROM comments WHERE user_id = $1 ORDER BY created_at DESC`;

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
    const postsQuery = `SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC`;

    //give the value of userId
    const value = [userId];

    //execute the query
    const result = await db.query(postsQuery, value);

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

    let user = convertSnakeToCamel(result.rows[0]);

    console.log(user);

    if (user.isDoctor) {
      console.log("user ID is", user.userId);
      const doctorData = await User.fetchDoctorById(user.userId);

      console.log("Doctor data is", doctorData);
      user = {
        ...user,
        ...doctorData,
      };
    }

    return user;
  }

  static async updateUserDescription(description, userId) {
    //create the query to update the column corresponding to that user_id

    const updateUserQuery = `UPDATE users SET description = $1 WHERE user_id = $2 RETURNING *`;

    const values = [description, userId];

    const result = await db.query(updateUserQuery, values);

    return convertSnakeToCamel(result.rows[0]);
  }

  static async addCondition(condition, userId) {
    //will check over the db and append a condition to the array
    const updateUserCondition = `UPDATE users SET conditions = array_append(conditions, $1) WHERE user_id = $2 RETURNING *`;

    const values = [condition, userId];

    const result = await db.query(updateUserCondition, values);

    return convertSnakeToCamel(result.rows[0]);
  }
}

module.exports = Profile;
