import React, { useEffect, useState } from "react";
import "./NotificationView.css";
import ApiClient from "../../services/apiClient";
import NotificationCard from "../NotificationCard/NotificationCard";

function NotificationView({ user, isLoggedIn, setNavNotifs, fetchNavNotifs, navNotifs}) {

  const notificationGetter = async () => {
    if (user?.userId) {
      const { data, error } = await ApiClient.getUserNotifications(user.userId);

      setNavNotifs(data.notifications)
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
              {navNotifs
                .filter(
                  (notificationData) => notificationData.viewStatus === false
                )
                .map((notificationData) => (
                <NotificationCard notificationData={notificationData} fetchNavNotifs = {fetchNavNotifs} user = {user}/>
                ))}
            </div>
          </div>
          <div className="big-notifications">
            <h3 className="notification-title-card">Previous Notifications</h3>
            <div className="notification-holder">
              {navNotifs
                .filter(
                  (notificationData) => notificationData.viewStatus === true
                )
                .map((notificationData) => (
                  <NotificationCard notificationData={notificationData} fetchNavNotifs = {fetchNavNotifs}  user = {user}/>
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
