// FavoriteItem.js
import React from 'react';
import '../style/FavoriteItem.css';

const FavoriteItem = ({ item }) => {
    return (
        <div className="favorite-item">
            <img src={item.imageUrl} alt={item.title} className="favorite-item-image" />
            <div className="favorite-item-info">
                <h2 className="favorite-item-title">{item.title}</h2>
                <p className="favorite-item-price">{item.price}</p>
                <button className="favorite-item-remove">Remove from Favorites</button>
            </div>
        </div>
    );
}

export default FavoriteItem;
