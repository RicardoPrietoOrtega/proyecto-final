// ProductDetail.js
import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import '../style/ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Card className="product-detail">
      <div className="product-image-container">
        <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
      </div>
      <Card.Body className="product-details">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text><strong>Material:</strong> {product.material}</Card.Text>
        
        <Form.Group>
          <Form.Label>Color:</Form.Label>
          <Form.Select onChange={handleColorChange}>
            <option value="">Selecciona un color</option>
            {product.colors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Talla:</Form.Label>
          <Form.Select onChange={handleSizeChange}>
            <option value="">Selecciona una talla</option>
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Cantidad:</Form.Label>
          <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
        </Form.Group>

        <Card.Text><strong>Descripción:</strong> {product.description}</Card.Text>
        <Card.Text><strong>Precio:</strong> ${product.price}</Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
