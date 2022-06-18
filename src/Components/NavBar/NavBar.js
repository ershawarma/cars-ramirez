import CartWidget from '../CartWidget/CartWidget.js'
import logo from '../../Img/R.jpg'
import './NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    // const [state, setState] = useState(false);
    // const toggle = () => {
    //     setState(!state);
    // } 
    // console.log(state);

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
        <Link to='/' className='nav-branding'>
        <img className='nav-logo'
                  src={logo} 
                  alt={'logo'}
        />
        </Link>

        <div className='nav-menu'>
            <Link to='/category/Mangas' className='nav-item'>Mangas</Link>
            <Link to='/category/Animes' className='nav-item'>Animes</Link>
            <Link to='/category/Figures' className='nav-item'>Figures</Link>
            <Link to='/category/Comics' className='nav-item'>Comics</Link>
            <span className='nav-item'><CartWidget/></span>
        </div>

        <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    </nav>
    {/* <button onClick={toggle}>{state ? 'close' : 'open'}</button> */}
    </div>

    );
}
export default NavBar;