import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './interfaces/Login';
import RegisterComponent from './interfaces/Register';
import Home from './interfaces/Home';
import Producto from './interfaces/Producto'; 
import Cuenta from './interfaces/UserProfile';
import Favorites from './interfaces/Favorites';
import Notifications from './interfaces/Notifications';
import Carrito from './interfaces/Cart';



function App() {
  return (

    < >
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/Registrar" element={<RegisterComponent />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/producto" element={<Producto/>} />
          <Route path="/cuenta" element={<Cuenta/>} />
          <Route path="/favoritos" element={<Favorites/>} />
          <Route path="/notificaciones" element={<Notifications/>} />
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
