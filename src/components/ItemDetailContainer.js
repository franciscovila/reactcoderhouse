import React, {useState, useEffect} from 'react';
import { Spinner } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getItem = async () => {
        try{
            const respuesta = await fetch('https://fakestoreapi.com/products/3')
            const data = await respuesta.json()
            setProduct(data)
        }
        catch(err){
            console.log('un error', err)
            console.error('un error', err)
        }
        finally{
            setLoading(false)
        }
    }
        getItem();
}, [])

return (
    <>
        <h1>{greeting}</h1>
        {
            loading
            ? <Spinner/>
            : <ItemDetail producto={product} />
        }
    </>

)
}

export default ItemDetailContainer;