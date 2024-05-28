// Producto.js
import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import '../style/Producto.css';

function Producto() {
    // Datos de ejemplo para una gorra
    const gorra = {
        image: 'https://www.forprint.com.mx/wp-content/uploads/2018/11/K100CB.jpg',
        title: 'Gorra Nike',
        material: 'Algodón',
        sizes: ['Única'],
        colors: ['#000000', '#ffffff'],
        description: 'Gorra de algodón con logo de Nike',
        price: 25.99
    };

    // Datos de ejemplo para una prenda superior (playera)
    const playera = {
        image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
        title: 'Playera Adidas',
        material: 'Algodón',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        description: 'Playera de algodón con logo de Adidas',
        price: 19.99
    };

    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <main className="main-content">
                    {/* Mostrar detalles de la gorra */}
                    <ProductDetail product={gorra} />

                    {/* Mostrar detalles de la playera */}
                    <ProductDetail product={playera} />
                </main>
            </div>
        </div>
    );
}

export default Producto;
