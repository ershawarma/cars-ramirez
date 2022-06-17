import ItemList from '../ItemList/ItemList';
import { getProducts } from '../Asyncmock/Asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css';

function ItemListContainer (props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response);
        })
    },[])

    return(
        <div className='ItemListContainerDiv'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer