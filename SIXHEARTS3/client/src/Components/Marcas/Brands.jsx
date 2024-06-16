import React from 'react';
import all_products from '../Components/Assets/all_products'
import ProductCard from '../Components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

const Brands = () => {
    const { brand } = useParams(); // Esto obtendrá la marca de la URL

    // Filtra los productos para obtener solo los de la marca correspondiente
    const products = all_products.filter(product => product.category.toLowerCase() === brand.toLowerCase());

    return (
        <div className='product-container'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Brands;
