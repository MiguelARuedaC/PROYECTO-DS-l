import React from 'react';
import all_products from '../Assets/all_products'
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import "./Marquitas.css"

const Marquitas = () => {
    const { category } = useParams(); // Esto obtendrá la marca de la URL

    // Filtra los productos para obtener solo los de la marca correspondiente
    const products = all_products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    return (
        <div>
            <h1>Nuestros productos {category.charAt(0).toUpperCase() + category.slice(1)}:</h1>
            <div className='product-container'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Marquitas;
