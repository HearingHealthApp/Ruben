import React from 'react'
import "./NotificationCard.css"
import { Link } from 'react-router-dom'

function NotificationCard({notificationData}) {
    console.log(notificationData)
  return (
    //<Link to = {`/${}`}>
      <div>{notificationData.message}</div>
      //</Link>
  )
}

export default NotificationCard