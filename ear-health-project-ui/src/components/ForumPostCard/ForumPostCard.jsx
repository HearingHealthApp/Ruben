import React from "react";
import "./ForumPostCard.css";

const ForumPostCard = ({ post }) => {
  const formatTimeSincePost = (timestamp) => {
    const ONE_MINUTE = 60 * 1000; // milliseconds in a minute
    const ONE_HOUR = 60 * ONE_MINUTE; // milliseconds in an hour
    const ONE_DAY = 24 * ONE_HOUR; // milliseconds in a day

    const currentTime = new Date(); // current time
    const postTime = new Date(timestamp); // post creation time

    const timeDifference = currentTime - postTime; // time difference in milliseconds

    // Check if less than a minute
    if (timeDifference < ONE_MINUTE) {
      return "just now";
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
    return ` on ${postTime.toLocaleDateString()}`;
  };

  return (
    <div className="forum-post-handler">
      <div className="forum-post-container">
        <h1 className="forum-post-title">{post.title}</h1>
        <p className={`${post.category}`}>{post.category}</p>

        {post.isAnonymous ? (
          <p className="posted-by">Posted by Anonymous</p>
        ) : (
          <p className="posted-by">
            Posted by {post.username} {formatTimeSincePost(post.createdAt)}
          </p>
        )}

        <p className="cutoff-text">{post.content}</p>
      </div>
    </div>
  );
};

export default ForumPostCard;
