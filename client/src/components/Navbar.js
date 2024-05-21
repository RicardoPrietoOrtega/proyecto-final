import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de carrito de compras
import '../style/Navbar.css'; // Asegúrate de tener este archivo en tu proyecto
import logo from '../images/logo_Yorch_Print.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-links">
                <a href="/inicio">Inicio</a>
                <a href="/producto">Productos</a>
                {/* Agrega más enlaces según sea necesario */}
            </div>
            <div className="navbar-search">
                <input type="search" placeholder="Buscar..." aria-label="Buscar" />
            </div>
            <div className="navbar-icons">
                <a href="/cuenta" aria-label="Cuenta">Cuenta</a>
                <a href="/favoritos" aria-label="Favoritos">Favoritos</a>
                <a href="/notificaciones" aria-label="Notificaciones">Notificaciones</a>
                <a href="/carrito" aria-label="Carrito">Carrito</a>
            </div>
        </nav>
    );
}

export default Navbar;
