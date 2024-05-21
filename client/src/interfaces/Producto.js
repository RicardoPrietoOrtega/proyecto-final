import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail.js';
import '../style/Producto.css';

function Producto() {
    // Asegúrate de reemplazar esto con los datos reales de tu producto
    const product = {
        image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
        title: 'Título del producto',
        material: 'Material del producto',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        description: 'Descripción del producto',
        price: 'Precio del producto'
    };

    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <main className="main-content">
                    <ProductDetail product={product} />
                </main>
            </div>
        </div>
    );
}

export default Producto;
