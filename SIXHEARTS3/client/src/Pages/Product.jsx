import { useParams } from 'react-router-dom';
import all_products from '../Components/Assets/all_products';
import './CSS/Product.css'

const Product = () => {
    const { id } = useParams();
    const product = all_products.find(p => p.id === Number(id));

    return (
        <div className='product-page'>
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <label>Talla: 
                    <select>
                        <option>Selecciona una talla</option>
                        <option>7</option>
                        <option>8</option>
                        <option>8.5</option>
                        <option>9</option>
                        <option>9.5</option>
                        <option>10</option>
                        <option>10.5</option>
                        <option>11</option>
                        <option>12</option>
                        
                    </select>
                </label>
                <label>Cantidad: 
                    <input type="number" min="1" defaultValue="1" />
                </label>
                <button className="add-to-cart">Añadir al carrito</button>
                <button className="buy-now">Comprar</button>
            </div>
        </div>
    );
};

export default Product;
