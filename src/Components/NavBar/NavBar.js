import React from 'react';
import CartWidget from './CartWidget.js.js'
import './NavBar.css'
import logo from './R.jpg'

function NavBar() {
    return (
      <nav>
        <ul>
            {/* logo y brand name */}
            <li> <img 
                  src={logo} 
                  alt={'logo'}
                />
            </li>
            <li>Amirez Store</li>

            {/* categorias clickeables */}
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Pets</li>
            <li>Contact us</li>

            {/* carro de compras */}
            <li className='push'> <CartWidget/> </li>
        </ul>
      </nav> 
    );
  }
  
  export default NavBar;