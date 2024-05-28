// src/components/ProductList.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map(product => (
        <Col md={4} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
