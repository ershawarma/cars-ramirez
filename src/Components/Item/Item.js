import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, img, name, price}) => {
    return(
        // <li className="ItemDiv">
        //     <h2>{name}</h2>
        //     <img src={img} alt={name}/>
        //     <h4>Price: ${price}</h4>

        // </li>

        <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
         <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>
               Price: ${price}
            </p>
        </section>
        <footer className='ItemFooter'>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </footer>
</article>
    )
}
export default Item

{/* <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
         <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>
               Price: ${price}
            </p>
        </section>
        <footer className='ItemFooter'>
            <Link to='/detail/2'>Ver detalle</Link>
        </footer>
</article> */}