import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CommentCard.css";
import axios from "axios";

const CommentCard = ({ comment }) => {
  console.log(comment.userId);
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
      return `Posted ${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    }

    // Check if less than a day
    if (timeDifference < ONE_DAY) {
      const hoursAgo = Math.floor(timeDifference / ONE_HOUR);
      return `Posted ${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    }

    // For longer durations, you can use libraries like Moment.js for more advanced formatting
    // or implement custom logic to display "posted x days ago" or specific date format

    // Default case
    return `Posted on ${postTime.toLocaleDateString()}`;
  };

  //useState for the user's image key
  const [imageKey, setImageKey] = useState("");

  //getter for the user
  const getUserFromComment = async () => {
    //should get the user's image an attach it to the comment
    const { data } = await axios.get(
      `http://localhost:3001/comments/comment/${comment.userId}`
    );
    console.log(data);
    setImageKey(data.image);
  };

  useEffect(() => {
    getUserFromComment();
  }, [comment]);

  console.log(imageKey);

  const imageUrl = `http://localhost:3001/s3/image/${imageKey}`;

  console.log(imageUrl);

  return (
    <div className="commenting-box">
      <div className="comment-info">
        {comment.isAnonymous ? (
          <p> Anonymous</p>
        ) : (
          <div className="user-details">
            {imageKey == "" ? (
              <img src="" />
            ) : (
              <Link to={`/profile/${comment.userId}`}>
                <img src={imageUrl} className="user-img" />
              </Link>
            )}
            <Link to={`/profile/${comment.userId}`}>
              <p className="comment-username">{comment.username}</p>
            </Link>
          </div>
        )}
        {comment.fromDoctor && <p className="Medical">Verified Doctor</p>}
        <p>{formatTimeSincePost(comment.createdAt)}</p>
      </div>
      <div className="comment-content">
        <p id="text">{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
