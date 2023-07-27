import React, { useEffect, useState } from "react";
import "./NotificationView.css";
import ApiClient from "../../services/apiClient";
import NotificationCard from "../NotificationCard/NotificationCard";

function NotificationView({ user, isLoggedIn }) {
  const [userNotifications, setUserNotifications] = useState([]);

  const notificationGetter = async () => {
    if (user?.userId) {
      const { data, error } = await ApiClient.getUserNotifications(user.userId);

      setUserNotifications(data.notifications);
    }
  };

  useEffect(() => {
    notificationGetter();
  }, [user]);

  if (isLoggedIn) {
    return (
      <div className="notifications-big-container">
        <div className="notification-container">
          <div className="big-notifications">
            <h3 className="notification-title-card">New Notifications</h3>
            <div className="notification-holder">
              {userNotifications
                .filter(
                  (notificationData) => notificationData.viewStatus === false
                )
                .map((notificationData) => (
                  <NotificationCard notificationData={notificationData} />
                ))}
            </div>
          </div>
          <div className="big-notifications">
            <h3 className="notification-title-card">Previous Notifications</h3>
            <div className="notification-holder">
              {userNotifications
                .filter(
                  (notificationData) => notificationData.viewStatus === true
                )
                .map((notificationData) => (
                  <NotificationCard notificationData={notificationData} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="big-container">
      <div className="notification-container">
        <p>Please Sign in to display notifications</p>
      </div>
    </div>
  );
}

export default NotificationView;
