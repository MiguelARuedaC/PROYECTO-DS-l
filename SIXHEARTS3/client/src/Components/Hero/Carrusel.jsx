import React from 'react'
import './Carrusel.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p9_img from "../Assets/product_9.jpg"
import p10_img from "../Assets/product_10.jpg"
import p11_img from "../Assets/product_11.jpg"
import p12_img from "../Assets/product_12.jpg"
import p13_img from "../Assets/product_13.jpg"
import p14_img from "../Assets/product_14.jpg"

export default function Carrusel() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };
    return (
    <div className='Carrusel'>
        
        <Carousel responsive={responsive}>
            <div className="card">
                <img className='product--image' src={p14_img} alt='product14'/>
                <h2>New Balance Colorido</h2>
                <p className='price'>320$</p>
                <p>New Balance colorido modelo 2021</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            <div className="card">
                <img className='product--image' src={p13_img} alt='product13'/>
                <h2>New Balance Blanco</h2>
                <p className='price'>224$</p>
                <p>New Balance Blanco Naranja modelo 2023</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            <div className="card">
                <img className='product--image' src={p12_img} alt='product12'/>
                <h2>New Balance Azul Naranja</h2>
                <p className='price'>178$</p>
                <p>New Balance Azul Naranja modelo 2021</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            <div className="card">
                <img className='product--image' src={p11_img} alt='product11'/>
                <h2>New Balance Blanco Azul</h2>
                <p className='price'>222$</p>
                <p>New Balance Blanco azul modelo 2021</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            <div className="card">
                <img className='product--image' src={p10_img} alt='product10'/>
                <h2>Jordan Dunk Rojo Gris</h2>
                <p className='price'>402$</p>
                <p>Jordan Dunk Rojo Gris modelo 2022</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            
            <div className="card">
                <img className='product--image' src={p9_img} alt='product9'/>
                <h2>Jordan Dunk Cafe Blanco</h2>
                <p className='price'>311$</p>
                <p>Jordan Dunk Cafe Blanco modelo 2022</p>
                <p><button>Añadir al carrito</button></p>
            </div>

            
        </Carousel>

    </div>
    )
}
