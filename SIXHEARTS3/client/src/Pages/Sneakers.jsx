import React, { useState } from 'react';
import all_products from '../Components/Assets/all_products'
import ProductCard from '../Components/ProductCard/ProductCard';
import './CSS/Sneakers.css';

const Sneakers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = all_products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className='global'>
            <div className='sneakers'>
                <h1>Todos nuestros productos:</h1>
                <div className='product-container'>
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className='pagination-buttons'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(all_products.length / productsPerPage)}>
                    Siguiente
                </button>
                </div>
            </div>
        </div>
    );
};

export default Sneakers;
