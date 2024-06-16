import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './ProductCard.css'

const ProductCard = ({ product, inCart }) => {
    const [cart, setCart] = useContext(CartContext); // Accede al contexto del carrito

    const addToCart = () => {
        setCart(currentCart => [...currentCart, product]);
    };

    const removeFromCart = () => {
        setCart(currentCart => currentCart.filter(item => item.id !== product.id));
    };

    return (
        <div className='product-card'>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>${product.price}</p>
            </Link>
            {inCart ? (
            <button onClick={removeFromCart}>Eliminar del carrito</button>       
            ) : (
                <button onClick={addToCart}>Añadir al carrito</button>
            )}
        </div>
    );
};

export default ProductCard;

