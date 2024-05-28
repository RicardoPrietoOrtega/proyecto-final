import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row className="py-3">
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una empresa dedicada a proporcionar las mejores soluciones tecnológicas.
            </p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Inicio</a></li>
              <li><a href="#about" className="text-white">Sobre Nosotros</a></li>
              <li><a href="#services" className="text-white">Servicios</a></li>
              <li><a href="#contact" className="text-white">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <address>
              123 Calle Falsa,<br />
              Ciudad, País<br />
              <a href="mailto:info@empresa.com" className="text-white">info@empresa.com</a>
            </address>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
