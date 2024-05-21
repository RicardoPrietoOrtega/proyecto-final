// Notifications.js
import React from 'react';
import Navbar from '../components/Navbar';
import NotificationItem from '../components/NotificationItem';
import '../style/Notifications.css';

const notifications = [
    {
        id: 1,
        text: 'Notification 1',
        time: '10:00 AM'
    },
    {
        id: 2,
        text: 'Notification 2',
        time: '11:30 AM'
    },
    // Agrega más notificaciones según sea necesario
];

const Notifications = () => {
    return (
        <>
            <Navbar />
            <div className="notifications">
                <div className="notifications-content">
                    {notifications.map(notification => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Notifications;
