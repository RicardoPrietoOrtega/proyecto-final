import React from 'react';
import '../style/Sidebar.css'; // Asegúrate de tener este archivo en tu proyecto

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categorías</h2>
      <ul>
        <li><a href="/categorias/playeras">Playeras</a></li>
        <li><a href="/categorias/gorras">Gorras</a></li>
        <li><a href="/categorias/accesorios">Accesorios</a></li>
        <li><a href="">Proximamente...</a></li>
        {/* Añade más categorías según sea necesario */}
      </ul>
    </aside>
  );
}

export default Sidebar;
