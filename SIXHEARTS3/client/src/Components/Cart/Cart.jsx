import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; // Importa el CartContext
import ProductCard from '../Components/ProductCard/ProductCard';

const Cart = () => {
    const [cart] = useContext(CartContext); // Accede al contexto del carrito

    return (
        <div>
            <h1>Tu carrito:</h1>
            {cart.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Cart;
