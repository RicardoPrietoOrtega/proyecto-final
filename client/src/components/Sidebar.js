import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const SidebarFilter = () => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Header>Filtrar Productos</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formCategory">
            <Form.Label>Categoría</Form.Label>
            <Form.Check type="checkbox" label="Playeras" />
            <Form.Check type="checkbox" label="Gorras" />
          </Form.Group>

          <Form.Group controlId="formPriceRange" className="mt-3">
            <Form.Label>Rango de Precio</Form.Label>
            <Form.Control type="range" min="0" max="100" />
          </Form.Group>

          <Form.Group controlId="formSizes" className="mt-3">
            <Form.Label>Tallas</Form.Label>
            <Form.Check type="checkbox" label="S" />
            <Form.Check type="checkbox" label="M" />
            <Form.Check type="checkbox" label="L" />
            <Form.Check type="checkbox" label="XL" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Aplicar Filtros
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SidebarFilter;
