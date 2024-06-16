import React, { useState } from 'react';
import './Pago.css'

export const Pago = () => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
};

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el pago
        console.log(`name: ${name}, lastname: ${lastname}, number: ${number}, adress: ${adress}`);
    }

    return (
        <div className="payment-container">
            <h2>Información de pago</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombres:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Apellidos:
                    <input type="text" value={lastname} onChange={e => setLastName(e.target.value)} />
                </label>
                <label>
                    Número telefónico:
                    <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
                </label>
                <label>
                    Dirección de envío:
                    <input type="text" value={adress} onChange={e => setAdress(e.target.value)} />
                </label>
                <h3>Seleccione su método de pago:</h3>
                <div className='space'> 
                </div>
                <div className='space-inline'> 
                <input type="submit" value="Tarjeta de crédito" onClick={() => handlePaymentMethod('tarjeta de crédito')}/>
                </div>
                <input type="submit" value="Tarjeta de débito"  onClick={() => handlePaymentMethod('tarjeta de débito')}/>

                <div className='space'>
                {paymentMethod && (
                <p>Has seleccionado pagar con: {paymentMethod}</p>
            )}
            </div>
                <input type="submit" value="Confirmar" />
            
            </form>
        </div>
    )
}

export default Pago