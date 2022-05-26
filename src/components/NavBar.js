import React from 'react';
import CartWidget from './CartWidget.js'
import './NavBar.css'
import logo from './R.jpg'

function NavBar() {
    return (
      <div className='nav'>
        <ul>
            {/* logo y brand name */}
            <li> <img 
                  src={logo} 
                  alt={'logo'}
                />
            </li>
            <li>Aluv</li>

            {/* categorias clickeables */}
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Pets</li>
            <li>Contact us</li>

            {/* carro de compras */}
            <li className='push'> <CartWidget/> </li>
        </ul>
      </div> 
    );
  }
  
  export default NavBar;