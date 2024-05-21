import React from 'react';
import '../style/UserInfo.css';

const UserInfo = ({ user }) => {
    return (
        <div className="user-info">
            <h2>Información del Usuario</h2>
            <p><strong>Nombre Completo:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Dirección:</strong> {user.address}</p>
        </div>
    );
};

export default UserInfo;
