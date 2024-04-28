import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    'imagenes/adidas-Campus-00s-Core-Black-Product.jpg',
    'imagenes/adidas-Campus-00s-Grey-White-Product.jpg',
    'imagenes/adidas-Yeezy-Boost-350-V2-Onyx-Product.jpg ',
    'imagenes/newbalance-blanco.jpg',
    'imagenes/newbalance-sal.jpg',
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  const HeaderButton = ({children}) => (
    <div className="header-button-container">
      <button className="header-button">{children}</button>
    </div>
  );
  

  return (
    <div className="app">
      <header className="header">
        <div className="app-name">SixHearts</div>
        <div className="header-buttons">
          <div className="header-buttons-left">
            <div className="header-button-small header-button-dark">Inicio</div>
            <div className="header-button-small header-button-dark">Pago</div>
            <div className="dropdown">
              <button className="header-button-small header-button-dark dropbtn">Sneakers</button>
              <div className="dropdown-content">
                <a href="#">Adidas</a>
                <a href="#">Nike</a>
                <a href="#">New Balance</a>
                <a href="#">Jordan</a>
              </div>
            </div>
          </div>
          <HeaderButton>Buscar...</HeaderButton>
          <HeaderButton>Mi carrito</HeaderButton>
          <HeaderButton>Iniciar sesión</HeaderButton>
        </div>
      </header>
      <main className="main-content">
        <div className="presentation">
        
          <h1 className="title">Six Hearts</h1>
          <img className="presentation-image" src={process.env.PUBLIC_URL + '/imagenes/foto_sn.jpg'} alt="Presentación" />
        </div>
        <div className="products">
          <h2 className="title">Nuestros productos</h2>
          <div className="carousel">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + image}
                alt={`Producto ${index + 1}`}
                className={index === currentImageIndex ? "carousel-image current" : "carousel-image"}
              />
            ))}
            <div className="navigation-buttons">
              <button onClick={handlePrevClick}>Anterior</button>
              <button onClick={handleNextClick}>Siguiente</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="developer-info">
          Desarrollado por: 
                            
                            <li>Santiago Gesamá Valencia - 202160013</li>
                            <li>Cesar Augusto Osorio Pareja - 202159927</li>
                            <li>Miguel Angel Rueda Colonia - 202159896</li>
          <br />
          
        </div>
      </footer>
    </div>
  );
}


export default App;


