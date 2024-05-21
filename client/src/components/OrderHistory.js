import React from 'react';
import '../style/OrderHistory.css';

const OrderHistory = ({ orders }) => {
    return (
        <div className="order-history">
            <h2>Historial de Pedidos</h2>
            {orders.length === 0 ? (
                <p>No tienes pedidos anteriores.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID del Pedido</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.date}</td>
                                <td>{order.total}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderHistory;
