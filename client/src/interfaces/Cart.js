// Cart.js
import React from 'react';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import '../style/Cart.css';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            title: 'Product 1',
            price: '$50.00',
            imageUrl: 'https://example.com/product1.jpg',
            quantity: 2
        },
        {
            id: 2,
            title: 'Product 2',
            price: '$30.00',
            imageUrl: 'https://example.com/product2.jpg',
            quantity: 1
        },
        // Add more items as needed
    ];

    return (
        <>
            <Navbar />
            <div className="cart">
                <div className="cart-content">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cart;
