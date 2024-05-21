// Favorites.js
import React from 'react';
import Navbar from '../components/Navbar';
import FavoriteItem from '../components/FavoriteItem';
import '../style/Favorites.css';

const favorites = [
    {
        id: 1,
        title: 'Favorite Item 1',
        price: '$100.00',
        imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    {
        id: 2,
        title: 'Favorite Item 2',
        price: '$200.00',
        imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    // Agrega más artículos favoritos según sea necesario
];

const Favorites = () => {
    return (
        <>
            <Navbar />
            <div className="favorites">
                <div className="favorites-content">
                    {favorites.map(item => (
                        <FavoriteItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Favorites;
