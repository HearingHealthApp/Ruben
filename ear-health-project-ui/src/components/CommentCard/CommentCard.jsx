import React from 'react'
import "./CommentCard.css"

const CommentCard = ({comment}) => {
  console.log(comment)
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

  return (
    <div className='commenting-box'>
      <div className='comment-info'>
      {comment.is_anonymous ? (
        <p> Anonymous</p>
      ) : (
        <p>{comment.username}</p>
      )}
      <p>{formatTimeSincePost(comment.created_at)}</p>
      </div>

      <p>{comment.content}</p>
    </div>
  )
}

export default CommentCard