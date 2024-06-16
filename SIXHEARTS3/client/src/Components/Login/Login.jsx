import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                correo_electronico: email,
                contraseÑa: password
            });
            console.log(response.data);
            localStorage.setItem('token', response.data.token); // Guardar el token
            setMessage('Login exitoso.');
            setTimeout(() => {
                navigate('/dashboard'); // Redirigir al dashboard
            }, 1000); // Esperar 1 segundo antes de redirigir
        } catch (error) {
            console.error(error.response.data);
            setMessage(error.response.data.error || 'Error al iniciar sesión.'); // Mostrar mensaje de error
        }
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <div className='login-contenedor input'>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />            
                    </div>   
                </label>

                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Iniciar sesión" />
            </form>
            {message && <p>{message}</p>}
            <p>No tienes una cuenta? <Link to="/signup">Crea una</Link></p>
        </div>
    );
}

export default Login;
