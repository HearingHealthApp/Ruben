//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const {
  convertSnakeToCamel,
  arrayConvertSnakeToCamel,
} = require("../utils/formatters");

class Comments {
  //function to post a comment under a specific forum post
  static async postComment(data) {
    //required input fields to create a comment
    const requiredFields = ["content", "isAnonymous", "commentorIsDoctor"];

    //check if each field is filled out
    requiredFields.forEach((field) => {
      if (!data.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //create the user query that will insert the comment into the db
    const commentQuery = `
    INSERT INTO comments (post_id , user_id, username, content, is_anonymous, from_doctor)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
    //values that we will put into the query
    const values = [
      data.postId,
      data.commentorId,
      data.commentorUsername,
      data.content,
      data.isAnonymous,
      data.commentorIsDoctor,
    ];

    //insert the actual comment into the db and return
    const result = await db.query(commentQuery, values);

    //get the posted comment and convert it to camelCase
    const comment = convertSnakeToCamel(result.rows[0]);

    // create a placeholder for the notification message corresponding to the comment
    let message = "";

    // we have conditionals that determine whether we want to display the username in the
    // notification message
    if (data.isAnonymous) {
      message = `A user commented on your post titled \"${data.postTitle}\"`;
    } else {
      message = `${data.commentorUsername} commented on your post titled \"${data.postTitle}\"`;
    }

    // check if the user commenting is not the user themselves
    if (data.commentorId !== data.userToNotify) {
      // if they are not the creators of the post, we want to
      // create a notification fr the creator of the post

      // we create a query that cerates a notification row based on the comment just made
      const notificationQuery = `
    INSERT INTO notifications (user_id, post_id, comment_id, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

      //values we will be assigning to our notification query
      const notificationValues = [
        data.userToNotify,
        data.postId,
        comment.commentId,
        message,
      ];

      // posting to the notification table in the db
      const notificationResult = await db.query(
        notificationQuery,
        notificationValues
      );
    }

    // return the comment we made
    return comment;
  }

  static async loadAllForumComments(forumID) {
    //check if the forumID is properly passed
    if (!forumID) {
      throw new BadRequestError("No id provided");
    }

    //select from comments db wher the post id matches the post id given
    const createUserQuery = `SELECT * FROM comments WHERE post_id = $1 ORDER BY from_doctor DESC, created_at DESC`;

    // execute the query
    const result = await db.query(createUserQuery, [forumID]);

    // use the converter to adjust the syntax of the database return
    const comments = arrayConvertSnakeToCamel(result.rows);

    return comments;
  }

  static async getUserFromComment(commentUserId) {
    if (!commentUserId) {
      throw new BadRequestError("No id provided");
    }

    const createUserQuery = `SELECT * FROM users WHERE user_id = $1`;

    const value = [commentUserId]

    const result = await db.query(createUserQuery, value)

    return convertSnakeToCamel(result.rows[0])

  }
}

module.exports = Comments;
