import CartWidget from '../CartWidget/CartWidget.js'
import logo from '../../Img/R.jpg'
import './NavBar.css'
import { useState } from 'react';

function NavBar() {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    } 
    console.log(state);

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
// hamburger.classList.toggle("active");
// navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
// hamburger.classList.remove("active");
// navMenu.classList.remove("active");
// }))

return (
    <div>
    <nav className='navbar'>
       
             {/* Logo */}
        <a href='#' className='nav-branding'>
        <img className='nav-logo'
                  src={logo} 
                  alt={'logo'}
        />
        </a>

            {/* Categories */}
        <ul className='nav-menu'>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Men</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Women</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Kids</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Pets</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Contact us</a>
            </li>

            {/* Shopping car */}
            <li className='nav-item'>
                <a href='#' className='nav-link'><CartWidget/></a>
            </li>
        </ul>

        <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    </nav>
    <button onClick={toggle}>{state ? 'close' : 'open'}</button>
    </div>

    );
}
export default NavBar;