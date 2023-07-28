import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import CommentCard from "../CommentCard/CommentCard";
import "./ForumPost.css";

const ForumPost = ({ user }) => {
  const formatTimeSincePost = (timestamp) => {
    const ONE_MINUTE = 60 * 1000; // milliseconds in a minute
    const ONE_HOUR = 60 * ONE_MINUTE; // milliseconds in an hour
    const ONE_DAY = 24 * ONE_HOUR; // milliseconds in a day

    const currentTime = new Date(); // current time
    const postTime = new Date(timestamp); // post creation time

    const timeDifference = currentTime - postTime; // time difference in milliseconds

    // Check if less than a minute
    if (timeDifference < ONE_MINUTE) {
      return "Posted just now";
    }

    // Check if less than an hour
    if (timeDifference < ONE_HOUR) {
      const minutesAgo = Math.floor(timeDifference / ONE_MINUTE);
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    }

    // Check if less than a day
    if (timeDifference < ONE_DAY) {
      const hoursAgo = Math.floor(timeDifference / ONE_HOUR);
      return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    }

    // For longer durations, you can use libraries like Moment.js for more advanced formatting
    // or implement custom logic to display "posted x days ago" or specific date format

    // Default case
    return `${postTime.toLocaleDateString()}`;
  };
  //get the params of the link
  const { postId } = useParams();
  //get the post by using postId

  //useState for the actual post
  const [post, setPost] = useState({});
  //useState for the actual comment
  const [comments, setComments] = useState([]);
  //useState for anonymity
  const [isAnonymous, setAnonymous] = useState(false);
  //useState for contentn
  const [content, setContent] = useState("");

  const getPost = async () => {
    const { data } = await apiClient.indvPostGetter(postId);

    console.log(data);

    setPost(data.post);
  };

  //fetch the comments
  const getComments = async () => {
    const { data } = await apiClient.getComments(postId);
    setComments(data);
  };

  //add comments
  const addComment = async (e) => {
    e.preventDefault();

    let doctor = false;
    if (user.isDoctor & user.verified) {
      doctor = true;
    }
    const { data } = await apiClient.postComment(
      JSON.stringify({
        userToNotify: post.userId,
        postId: postId,
        commentorId: user.userId,
        content: content,
        isAnonymous: isAnonymous,
        commentorUsername: user.username,
        postTitle: post.title,
        commentorIsDoctor: doctor,
      })
    );
    getComments();
  };

  //call the fetch on page load
  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <div className="big-container">
      <div className="post-container1">
        <div className="post-container-small">
          <div className="post-container">
            <div className="post-details">
              {post.isAnonymous ? (
                <div className="user-details">
                  <p className="username">Posted by Anonymous</p>
                </div>
              ) : (
                <div className="user-details">
                  <p className="username">{post.username} </p>
                </div>
              )}
              <p>{formatTimeSincePost(post.createdAt)}</p>
            </div>
            <div className="post-contents">
              <h1 className="post-title">{post.title}</h1>
              <div className="category-container">
                <p className="post-cat">{post.category}</p>
              </div>
              <p className="actual-post">{post.content}</p>
            </div>
          </div>
        </div>

        <div>
          <h1>Comments: </h1>

          <form onSubmit={addComment}>
            <textarea
              className="textbox"
              rows="8"
              columns="8"
              placeholder="Enter your post content"
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <br />
            <label>Post as anonymous?</label>
            <input
              type="checkbox"
              value={isAnonymous}
              onChange={(e) => {
                if (isAnonymous === false) {
                  setAnonymous(true);
                } else {
                  setAnonymous(false);
                }
              }}
            />
            <br />
            <button type="submit">Submit comment</button>
          </form>
          {comments.length===0 ? <p>No comments yet</p> : <div className="comments">
            {comments.map((comment) => (
              <CommentCard comment={comment} />
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
