import React from "react";
import { Spinner} from "@chakra-ui/react";
import {ItemList} from "./ItemList"
import { useState, useEffect} from "react";


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) =>{
            const lista = data.map((product)=>{
                return {...product, stock:Math.floor(Math.random()*100)}
            })
            setProducts(lista);
        })
        .catch((error) =>{
            setError(true)
            console.error("error")
        })
        .finally (()=>{
            setLoading(false)
        })
    }, [])




    return (
        <>
        <h1>{greeting}</h1>
        {
            loading
            ? <Spinner />
            : <ItemList products={products} />
        }
    
        </>
    )
    }

export default ItemListContainer
