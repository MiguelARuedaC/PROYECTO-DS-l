import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'


export const Dashboard = () => {
    const navigate = useNavigate();

    const handleButtonClick1 = () => {
        navigate('/personas');
        };

    const handleButtonClick2 = () => {
          navigate('/sneakers');
          };

    return (
        <div> 
            <h1>Bienvenido al modo edición</h1>
            <div className='dash-container input'> 
            <input type="submit" value="Gestionar personas" onClick={() => handleButtonClick1('Si')}/>
            <input type="submit" value="Gestionar productos" onClick={() => handleButtonClick2('No')}/>
            </div>
            
        </div>
    );
};

export default Dashboard;