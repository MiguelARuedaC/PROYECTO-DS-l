import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pago from './Pages/Pago';
import Inicio from './Pages/Inicio';
import Sneakers from './Pages/Sneakers'
import Marcas from './Pages/Marcas';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Signup from './Pages/Signup'; // Asegúrate de importar el componente Signup
import { CartProvider } from './Context/CartContext'
import Dash from './Pages/Dash';
import Persons from './Pages/Persons';

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el CartProvider */}
      <div className='main-content'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element= {<Inicio/>}/>
          <Route path = '/pago' element= {<Pago/>}/>
          <Route path = '/sneakers'element= {<Sneakers/>}/>
          <Route path="/marca/:category" element={<Marcas />} />
          <Route path = '/cart' element= {<Cart/>}/>
          <Route path = '/login' element= {<LoginSignup/>}/>
          <Route path = '/signup' element= {<Signup/>}/> {/* Aquí está la nueva ruta para el componente Signup */}
          <Route path = '/adidas' element = {<Marcas category = "Adidas"/>}/>
          <Route path = '/nike' element = {<Marcas category = "Nike"/>}/>
          <Route path = '/jordan' element = {<Marcas category = "Jordan"/>}/>
          <Route path = '/newBalance' element = {<Marcas category = "NewBalance"/>}/>
          <Route path = '/product' element = {<Product/>}/>
          <Route path = '/product/:id' element = {<Product/>}/>
          <Route path='/dashboard' element = {<Dash/>}/>
          <Route path='/personas' element = {<Persons/>}/>
          
          
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </CartProvider> 
  );
}

export default App;
