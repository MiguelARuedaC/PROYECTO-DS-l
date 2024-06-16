import React from 'react'
import './Hero.css'
import img_r1 from '../Assets/img_r1.jpg'
import Carrusel from './Carrusel'



export const Hero = () => {
    return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NUESTROS PRODUCTOS</h2>
            <div className='hero-right'>
            
        </div>
        
        

            <div>
                <div className='hero-hand-icon'>
                    <p>Sneakers Adidas</p>
                    
                    <img src={img_r1} alt=''/>
                </div>
                <div className='carrusel'>
        <Carrusel/>
        </div>
                
                
            </div>
            
        </div>

    </div>
    
    
    )
}   
export default Hero
