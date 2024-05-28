import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>${product.price}</strong></Card.Text>
        <Button variant="primary">Añadir al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
