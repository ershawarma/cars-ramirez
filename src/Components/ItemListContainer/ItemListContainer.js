import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../Asyncmock/Asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer (props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);
    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        }     
    }, [categoryId])

    if(loading){
        return <h1>Loading....</h1>
    }

    return(
        <div className='ItemListContainerDiv'>
            <h1>{props.greeting}</h1>
            {products.length > 0 
                ? <ItemList products={products} />
                : <h1>There are not products</h1>}
        </div>
    )
}

export default ItemListContainer