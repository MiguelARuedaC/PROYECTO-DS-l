import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import DropdownSneak from './DropdownSneak';
import { Link } from 'react-router-dom';

    const Navbar = () => {

        const[menu,setMenu] = useState("shop");
        const [openSneaker, setOpenSneaker] = useState(false); // Cambiado el nombre del estado a setOpenSneaker;

        const toggleSneakerMenu = () => {
            setOpenSneaker(!openSneaker);
        };

        return (
        <div className = 'navbar'>
            <div className = 'nav-logo'>
                <img src ={logo} alt="logo"></img>
                <p>SixHearts</p>
                            

            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("inicio")}} ><Link style={{textDecoration:'none'}} to= '/'>Inicio</Link>{menu==="inicio"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("sneakers")}} ><Link style={{textDecoration:'none'}} to= '/sneakers'>Sneakers</Link>{menu==="sneakers"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("pago")}} ><Link style={{textDecoration:'none'}} to= '/pago'>Pago</Link>{menu==="pago"?<hr/>:<></>} </li>
                <li onClick={toggleSneakerMenu}>Marcas</li>
                {
                    openSneaker &&(<DropdownSneak/>

                    )
                }
                
            
            </ul>
            
            <div className = "nav-login-cart">
                <Link style={{textDecoration:'none'}} to= '/login'><button>Login</button></Link>    
                <Link style={{textDecoration:'none'}} to= '/cart'><img src = {cart_icon} alt="" /></Link>

                <div className= "nav-cart-count">0</div>
            </div>
            
        </div>
        ) 
    }

    export default Navbar