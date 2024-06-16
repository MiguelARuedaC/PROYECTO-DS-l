import React, {useContext} from 'react';
import { CartContext } from '../Context/CartContext'; // Importa el CartContext
import ProductCard from '../Components/ProductCard/ProductCard';
import './CSS/Cart.css'; // Importa el archivo CSS

const Cart = () => {
    const [cart] = useContext(CartContext); // Accede al contexto del carrito

    // Calcula el precio total
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart-page">
            <div className='espaciado'>
            <h1>Mi carrito:</h1>
            <h1>RESUMEN DE COMPRA</h1>
                        </div>
                        {cart.length === 0 ? ( // Verifica si el carrito está vacío
                <div>
                    <div className='espaciado'> 
                        <p>¡Empieza un carrito de compras!</p>
                    <p style={{fontSize: '13px'}}>Aquí verás información de tu compra una vez que agregues productos.</p>
                </div>
                <h2>Total: ${totalPrice}</h2>
                </div>
                    
            ) : (
                    <div>
                        <div className='space'>
                        {<h2 className='right-text'>Total: ${totalPrice}</h2>}
                        { <h2 className='right-text'>Productos: {cart.length}</h2>}
                        { <input className='right-text button' type="submit" value="Continuar con la compra"/> }
                        </div>
                        {cart.map(product => (
                        <ProductCard key={product.id}  product={product} inCart />
                    ))}
                    </div>
            )}
        </div>
    );
};

export default Cart;