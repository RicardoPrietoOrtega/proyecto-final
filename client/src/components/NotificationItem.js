// NotificationItem.js
import React from 'react';
import '../style/NotificationItem.css';

const NotificationItem = ({ notification }) => {
    return (
        <div className="notification-item">
            <p className="notification-item-text">{notification.text}</p>
            <p className="notification-item-time">{notification.time}</p>
        </div>
    );
}

export default NotificationItem;
