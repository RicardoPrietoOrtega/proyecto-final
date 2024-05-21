import React, { useState, useEffect } from 'react';
import '../style/Home.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para obtener los productos desde la API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    // Llama a la función para obtener productos cuando el componente se monta
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          {/* Pasa los datos de productos como una prop al componente ProductList */}
          <ProductList products={products} />
        </main>
      </div>
    </div>
  );
}

export default Home;
