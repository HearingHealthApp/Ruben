import React, { useEffect, useState } from "react";
import "./NotificationView.css";
import ApiClient from "../../services/apiClient";
import NotificationCard from "../NotificationCard/NotificationCard";

function NotificationView({ user, isLoggedIn }) {
  const [userNotifications, setUserNotifications] = useState([]);

  const notificationGetter = async () => {
    if (user?.userId){
    const { data, error } = await ApiClient.getUserNotifications(user.userId);

    setUserNotifications(data.notifications);
    }
    
  };
  
  useEffect(() => {
    notificationGetter();
  }, [user]);

  return (
    <div className="notification-container">
      {isLoggedIn ? (
        userNotifications.map((notificationData) => (
          <NotificationCard notificationData={notificationData} />
        ))
      ) : (
        <p>Please Sign in to display notifications</p>
      )}
    </div>
  );
}

export default NotificationView;
