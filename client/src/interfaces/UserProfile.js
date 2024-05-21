import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';
import OrderHistory from '../components/OrderHistory';
import '../style/UserProfile.css';

const UserProfile = () => {
    const user = {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA'
    };

    const orders = [
        {
            orderId: '12345',
            date: '2023-04-15',
            total: '$150.00',
            status: 'Completado'
        },
        {
            orderId: '67890',
            date: '2023-03-20',
            total: '$200.00',
            status: 'En Proceso'
        }
    ];

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <Navbar />
            <div className="user-profile">
                <div className="profile-content">
                    <UserInfo user={user} />
                    <OrderHistory orders={orders} />
                    <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
