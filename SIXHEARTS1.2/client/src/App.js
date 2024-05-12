import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const Producto = ({ imagen, descripcion, precio }) => {
    return (
      <div className="producto">
        <img src={imagen} alt="Producto" />
        <h3>{descripcion}</h3>
        <p>{precio}</p>
      </div>
    );
  };
  
  const ListaProductos = ({ productos }) => {
    return (
      <div className="lista-productos">
        {productos.map((producto, index) => (
          <Producto
            key={index}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
    );
  };

  const productos = [
    {
      imagen: 'imagenes/adidas-Campus-00s-Grey-White-Product.jpg',
      descripcion: 'Adidas Grey',
      precio: '$100',
    },
    {
      imagen: 'imagenes/adidas-Campus-00s-Core-Black-Product.jpg',
      descripcion: 'Adidas core black',
      precio: '$150',
    },
  ];
  
  

  const carouselImages = [
    'imagenes/adidas-Campus-00s-Core-Black-Product.jpg',
    'imagenes/adidas-Campus-00s-Grey-White-Product.jpg',
    'imagenes/adidas-Yeezy-Boost-350-V2-Onyx-Product.jpg',
    'imagenes/newbalance-blanco.jpg',
    'imagenes/newbalance-sal.jpg',
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar la lógica del formulario aquí
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="app-name">SixHearts</div>
        <div className="header-buttons">
          <div className="header-buttons-left">
            <a href="#" className="header-button-small header-button-dark" onClick={() => handleNavigation('home')}>Inicio</a>
            <a href="#" className="header-button-small header-button-dark" onClick={() => handleNavigation('pago')}>Pago</a>
            <div className="dropdown">
              <button className="header-button-small header-button-dark dropbtn">Sneakers</button>
              <div className="dropdown-content">
                <a href="#" onClick={() => handleNavigation('adidas')}>Adidas</a>
                <a href="#" onClick={() => handleNavigation('nike')}>Nike</a>
                <a href="#" onClick={() => handleNavigation('newbalance')}>New Balance</a>
                <a href="#" onClick={() => handleNavigation('jordan')}>Jordan</a>
              </div>
            </div>
          </div>
          <a href="#" className="header-button" onClick={() => handleNavigation('carrito')}>Mi carrito</a>
          <a href="#" className="header-button" onClick={() => handleNavigation('login')}>Login</a>
        </div>
      </header>
      <main className="main-content">
        {currentPage === 'home' && (
          <div>
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
          </div>
        )}
        {currentPage === 'login' && (
          <div className="form-container">
            <div>
              <h2>Iniciar Sesión</h2>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Email:</label>
                  <input type="email" />
                </div>
                <div className="form-field">
                  <label>Contraseña:</label>
                  <input type="password" />
                </div>
                <button className="form-button" type="submit">Iniciar Sesión</button>
              </form>
              <p>¿No tienes cuenta? <a style={{color: 'blue'}} href="#" onClick={() => handleNavigation('register')}>Crea una aquí</a></p>
              <a style={{color: 'blue'}}>Olvidé mi contraseña</a>   
            </div>
          </div>
        )}

        {currentPage === 'register' && (
          <div className="form-container">
            <div>
              <h2>Registro</h2>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Nombre:</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>Apellido:</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>Email:</label>
                  <input type="email" />
                </div>
                <div className="form-field">
                  <label>Contraseña:</label>
                  <input type="password" />
                </div>
                <button className="form-button" type="submit">Crear cuenta</button>
              </form>
            </div>
          </div>
        )}
        
        {currentPage === 'carrito' && (
          <div className="cart-container">
            <div className='espaciado'>
            <h2>Mi Carrito</h2>
            <p style={{fontWeight: 'bold', fontSize: '24px'}}>RESUMEN DE COMPRA</p>
              </div>
            {cartItems.length === 0 ? (
              <div> 
              <div className='espaciado'> <p>¡Empieza un carrito de compras!</p> 
              <p style={{fontSize: '13px'}}>aquí verás información de tu compra una vez que agregues productos.</p>
              </div>
               <p>Tu carrito de compras está vacío</p>
              <button className='form-button' type='submit' onClick=
              {() => handleNavigation('Descubre Sneakers!')}>Descubre sneakers!</button> </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div>{item.name}</div>
                      <div>Cantidad: 1</div>
                      <div>Precio unitario: {item.price}</div>
                      <div>Subtotal: {item.price}</div>
                      <button onClick={() => removeCartItem(index)}>Eliminar</button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <h3>Resumen de Compra</h3> 
                  <div>Total de productos: {cartItems.length}</div>
                  <div>Total: {cartItems.reduce((total, item) => total + item.price, 0)}</div>
                </div>
              </>
            )}
          </div>
        )}
        
        {currentPage === 'pago' && (
          <div className="payment-container">

            <h2>Información de usuario</h2>
            <div className="form-container-left">
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-field">
                  <label>Nombres:</label>
                  <input type="text" />
                </div>
            <div className="form-field">
                  <label>Apellidos:</label>
                  <input type="email" />
                </div>
            <div className="form-field">
                  <label>Numero telefónico:</label>
                  <input type="text" />
                </div>
                <div className="form-field">
                  <label>dirección de envío:</label>
                  <input type="text" />
                </div>
                <button className='form-button'>Confirmar</button>

            </form>
              
               </div>
            <div>
              <button onClick={() => handlePaymentMethod('tarjeta de crédito')}>Tarjeta de Crédito</button>
              <button onClick={() => handlePaymentMethod('tarjeta de débito')}>Tarjeta de débito</button>
            </div>
            {paymentMethod && (
              <p>Has seleccionado pagar con: {paymentMethod}</p>
            )}
          </div>
        )}
         
         {currentPage === 'adidas' && (
          <div className="adidas-container">
             <h1>Productos de Calzado</h1>
      <ListaProductos productos={productos} />
            </div>)}

         {currentPage === 'nike' && (
          <div className="nike-container">
            </div>)}

         {currentPage === 'newbalance' && (
          <div className="newbalance-container">
            </div>)}

         {currentPage === 'jordan' && (
          <div className="jordan-container">
            </div>)}

      </main>
      <footer className="footer">
        <div className="developer-info">
          Desarrollado por:
          <ul>
            <li>Santiago Gesamá Valencia - 202160013</li>
            <li>Cesar Augusto Osorio Pareja - 202159927</li>
            <li>Miguel Angel Rueda Colonia - 202159896</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App; 
