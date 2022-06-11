import CartWidget from '../CartWidget/CartWidget.js'
import logo from '../../Img/R.jpg'
import './NavBar.css'

function NavBar() {
    return (
      <nav>
        <ul className='navBar-ul'>
            {/* logo y brand name */}
            <li> <img className='navBar-img'
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
            <li className='navBar-push'> <CartWidget/> </li>
        </ul>
      </nav> 
    );
  }
  
  export default NavBar;