import React from "react";
import "./NotificationCard.css";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../services/apiClient";


function NotificationCard({ notificationData }) {
  console.log(notificationData);
  let navigate = useNavigate();

  const notificationNavigator = () => {
    navigate(`/forum/post/${notificationData.postId}`)
    ApiClient.notificationUpdater(notificationData.notificationId)
  
  };
  return (
    <div className="notification-card">
      <p onClick={notificationNavigator}>{notificationData.message}</p>
    </div>
  );
}

export default NotificationCard;
