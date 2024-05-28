import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import '../style/Home.css';

function Home() {
  // Datos estáticos de ejemplo
  const products = [
    {
      id: 1,
      name: 'Playera Blanca',
      description: 'Playera blanca de algodón 100%',
      price: 20,
      image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    {
      id: 2,
      name: 'Gorra Negra',
      description: 'Gorra negra con diseño moderno',
      price: 15,
      image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    {
      id: 3,
      name: 'Playera Roja',
      description: 'Playera roja con estampado',
      price: 22,
      image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    {
      id: 4,
      name: 'Gorra Azul',
      description: 'Gorra azul con visera curva',
      price: 18,
      image: 'https://www.forprint.com.mx/wp-content/uploads/2023/01/FORPRINT_GILDAN_64800L_JASPE-800x1000.jpg'
    },
    // Puedes añadir más productos según sea necesario
  ];

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
      <Footer />
    </div>
  );
}

export default Home;
