import React from 'react';
import { Link } from 'react-router-dom';

const DropdownSneak = () => {
    return (
        <div className='flex flex-col dropdown'>
            <ul className='flex flex-col gap-4'>
                <li><Link style={{textDecoration:'none'}} to= '/marca/adidas'>Adidas</Link></li>
                <li><Link style={{textDecoration:'none'}} to= '/marca/nike'>Nike</Link></li>
                <li><Link style={{textDecoration:'none'}} to= '/marca/newbalance'>New Balance</Link></li>
                <li><Link style={{textDecoration:'none'}} to= '/marca/jordan'>Jordan</Link></li>
            </ul>
        </div>
    )
}

export default DropdownSneak;
