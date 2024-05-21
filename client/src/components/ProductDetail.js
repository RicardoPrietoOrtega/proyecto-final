import React from 'react';
import '../style/ProductDetail.css';

function ProductDetail({ product }) {
    const { image, title, material, sizes, colors, description, price } = product;

    return (
        <div className="productDetailContainer">
            <img src={image} alt={title} className="productDetailImage" />
            <div className="productDetailInfo">
                <h2 className="productDetailTitle">{title}</h2>
                <p className="productDetailMaterial">{material}</p>
                <div className="productDetailSizes">
                    <label>Tallas Disponibles: </label>
                    <select>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className="productDetailColors">
                    <label>Colores Disponibles: </label>
                    <div className="colorOptionsContainer">
                        {colors.map((color, index) => (
                            <div key={index} className="colorOptionItem" style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                </div>
                <p className="productDetailDescription">{description}</p>
                <p className="productDetailPrice">{price}</p>
                <button className="addToCartButton">Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ProductDetail;
