import React, {useState, useEffect} from 'react';
import { Spinner } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getItem = async () => {
        try{
            const respuesta = await fetch('https://fakestoreapi.com/products/3')
            const data = await respuesta.json()
            setProducto(data)
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
            : <ItemDetail item={producto} />
        }
    </>

)
}

export default ItemListContainer