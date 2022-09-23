import React from "react";
import { Spinner} from "@chakra-ui/react";
import {ItemList} from "./ItemList"
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {

    let{ IdCategoria } = useParams();
    console.log(IdCategoria);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false)

    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'

    useEffect(() => {
        fetch(`${URL_CATEGORY}${IdCategoria}`)
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
    }, [IdCategoria])




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
