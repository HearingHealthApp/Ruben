//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class Forum {
  //create a post taking in user's information and display it based on
  static async createPost(data) {
    //user inputs from the frontend
    const requiredFields = ["title", "content", "isAnonymous", "category"];

    //check if each field is filled out
    requiredFields.forEach((field) => {
      if (!data.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //create our query
    const postQuery = `
        INSERT INTO posts (title, content, category, is_anonymous, user_id, username)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `;

    //values we will be assigning to our query
    const values = [
      data.title,
      data.content,
      data.category,
      data.isAnonymous,
      data.userId,
      data.username,
    ];

    //query the database
    const result = await db.query(postQuery, values);

    //get and return the post the user created
    const post = result.rows[0];

    return post;
  }

  static async getPostByID(id) {
    //throw an error if the postID does not exist
    if (!id) {
      throw new BadRequestError("No id provided");
    }

    //query the db using the id, setting the value of id to the inputted id

    const postQuery = `SELECT * FROM posts WHERE post_id = $1`;

    const value = [id];

    //query the db using the postQuery and its value, and return the post
    const result = db.query(postQuery, value);

    return result.rows[0];
  }

  //get all forum posts and separate them into pages
  static async getAllPosts(pageNum) {
    //the query from the db that will use limit and offset to dynamically load more forum posts
    const offset = pageNum * 5
    const query = `SELECT * FROM posts ORDER BY created_at DESC OFFSET ${offset} LIMIT 5 `;
    const result = await db.query(query);

    //return the first 5 rows of the query, and dynamically load more as a button is pressed
    return result.rows;
  }

 //get all forum posts pertaining to a userID and separate them into pages
  static async getAllPostsByUserID(offset, userID) {
    //the query from the db that will use limit and offset to dynamically load more forum posts
    const query = `SELECT * FROM posts WHERE user_id = ${userID} OFFSET ${offset} LIMIT 5`;
    const result = await db.query(query);

    //return the first 5 rows of the query, and dynamically load more as a button is pressed
    return result.rows;
  }
}

module.exports = Forum;
