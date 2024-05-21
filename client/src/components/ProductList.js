// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import '../style/ProductList.css'; // Asegúrate de tener este archivo en tu proyecto

// Simulación de datos de productos, reemplaza con datos reales de tu aplicación
const products = [
  {
    id: 1,
    title: '¡NUEVA! PLAYERA CUELLO REDONDO MANGA LARGA NIÑOS WITEX J34',
    price: '$100.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 1'
  },
  {
    id: 2,
    title: '¡NUEVA! PLAYERA TIPO POLO NIÑOS WITEX J50',
    price: '$200.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 2'
  },
  {
    id: 3,
    title: '¡OFERTA! PLAYERA CON ESPALDA FORMA DE T DAMA GILDAN 645R2L',
    price: '$150.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 3'
  },
  {
    id: 4,
    title: '¡OFERTA! PLAYERA CUELLO ESCOTADO DAMA GILDAN 64550L',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 4'
  },
  {
    id: 5,
    title: '¡OFERTA! PLAYERA CUELLO REDONDO CABALLERO GILDAN 46000',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 5'
  },
  {
    id: 6,
    title: '¡OFERTA! PLAYERA CUELLO REDONDO JUVENIL GILDAN 64500B',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 6'
  },
  {
    id: 7,
    title: '*NUEVA* PLAYERA CUELLO REDONDO CABALLERO WITEX W20 _ 50% algodón -50% poliéster',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 7'
  },
  {
    id: 8,
    title: 'PLAYERA CABALLERO EUROCOTTON CUELLO REDONDO PARA SUBLIMAR',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 8'
  },
  {
    id: 9,
    title: 'PLAYERA CUELLO REDONDO BEBE 5100P',
    price: '$250.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 9'
  },
  {
    id: 10,
    title: 'PLAYERA CUELLO REDONDO CABALLERO EUROCOTTON',
    price: '$1000.00',
    imageUrl: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg',
    description: 'Descripción del producto 10'
  }
];

function ProductList() {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </section>
  );
}

export default ProductList;
