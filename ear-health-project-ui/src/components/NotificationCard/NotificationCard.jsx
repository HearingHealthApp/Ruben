import React from "react";
import "./NotificationCard.css";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../services/apiClient";


function NotificationCard({ notificationData, fetchNavNotifs, user}) {
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

  let navigate = useNavigate();

  const notificationNavigator =  async () => {
    ApiClient.notificationUpdater(notificationData.notificationId)
    const { data, error } = await ApiClient.getUserNotifications(user.userId)
    fetchNavNotifs(data.notifications)
    navigate(`/forum/post/${notificationData.postId}`)
  
  };
  return (
    <div className={`notification-card-${notificationData.viewStatus}`}>
      <p>{formatTimeSincePost(notificationData.createdAt)}</p>
      <p onClick={notificationNavigator}>{notificationData.message}</p>
    </div>
  );
}

export default NotificationCard;
