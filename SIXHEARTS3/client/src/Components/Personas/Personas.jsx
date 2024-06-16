import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Personas = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        const fetchPersonas = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/auth/personas');
                setPersonas(response.data);
            } catch (error) {
                console.error('Error al obtener las personas:', error);
            }
        };

        fetchPersonas();
    }, []);

    return (
        <div>
            <h1>Lista de Personas</h1>
            {personas.length > 0 ? (
                <ul>
                    {personas.map((persona) => (
                        <li key={persona.id_persona}>
                            <p>Nombre: {persona.nombre}</p>
                            <p>Correo Electrónico: {persona.correo_electronico}</p>
                            <p>Fecha de Registro: {persona.fecha_registro}</p>
                            <p>Contraseña: {persona.contraseña}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron personas.</p>
            )}
        </div>
    );
};

export default Personas;