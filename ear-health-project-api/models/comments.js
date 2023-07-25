//importing necessary dependencies
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const {convertSnakeToCamel, arrayConvertSnakeToCamel} = require("../utils/formatters");


class Comments {
  //function to post a comment under a specific forum post
  static async postComment(data) {
    //required input fields to create a comment
    const requiredFields = ["content", "isAnonymous"];

    const equiredFields = [
      "userId",
      "postId",
      "commentId"
    ];

    //check if each field is filled out
    requiredFields.forEach((field) => {
      if (!data.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    //create the user query that will insert the comment into the db
    const commentQuery = `
    INSERT INTO comments (post_id , user_id, username, content, is_anonymous)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `
    //values that we will put into the query 
    const values = [data.postId, data.commentorId, data.commentorUsername, data.content, data.isAnonymous]

    //insert the actual comment into the db and return
    const result = await db.query(commentQuery,values)

    //get the posted comment and convert it to camelCase
    const comment = convertSnakeToCamel(result.rows[0])

    let message = ""
    
    if (data.isAnonymous){
      message = `A user commented on your post titled \"${data.postTitle}\"`
    } else{
      message= `${data.commentorUsername} commented on your post titled \"${data.postTitle}\"`
    }

    const notificationQuery = `
        INSERT INTO notifications (user_id, post_id, comment_id, message)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `;

    //values we will be assigning to our query
    const notificationValues = [
      data.userToNotify,
      data.postId,
      comment.commentId,
      message
    ];

    console.log(comment)
    console.log(notificationValues)

    // posting to the db
    const notificationResult = await db.query(notificationQuery, notificationValues);


    console.log(message)
    return comment

  }

  static async loadAllForumComments(forumID) {

    //check if the forumID is properly passed
    if (!forumID) {
        throw new BadRequestError("No id provided")
    }

    //select from comments db wher the post id matches the post id given
    const createUserQuery = `SELECT * FROM comments WHERE post_id = $1`

    const result = await db.query(createUserQuery, [forumID])

    const comments = arrayConvertSnakeToCamel(result.rows)

    return comments

  }
}

module.exports = Comments;
