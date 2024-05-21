import React from 'react';
import '../style/ProductItem.css'; // Asegúrate de tener este archivo en tu proyecto

function ProductItem({ title, price, imageUrl, description }) {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
        <button className="product-button">Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductItem;
