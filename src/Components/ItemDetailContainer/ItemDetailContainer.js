import { useEffect, useState } from 'react';
import { getProductsById } from '../Asyncmock/Asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const { productId } = useParams();
    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])
    // console.log(product);

    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {... product}/>
        </div>
    )
}

export default ItemDetailContainer;