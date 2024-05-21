// CartItem.js
import React from 'react';
import '../style/CartItem.css';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            </div>
        </div>
    );
}

export default CartItem;
