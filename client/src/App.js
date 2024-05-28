import React, { useState } from 'react';
import './App.css';
// Importa los estilos de Bootstrap en tu archivo principal
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './interfaces/Login';
import RegisterComponent from './interfaces/Register';
import Home from './interfaces/Home';
import Producto from './interfaces/Producto'; 



function App() {
  return (

    < >
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/Registrar" element={<RegisterComponent />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/producto" element={<Producto/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
