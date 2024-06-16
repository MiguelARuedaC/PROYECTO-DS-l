import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/registro', {
                nombre: username,
                correo_electronico: email,
                contraseÑa: password
            });

            console.log(response.data);
            setMessage('Registro exitoso.');
        } catch (error) {
            console.error(error.response.data);
            setMessage(error.response.data || 'Error al registrar usuario.'); // Mostrar mensaje de error
        }
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de usuario:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Registrarse" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;
