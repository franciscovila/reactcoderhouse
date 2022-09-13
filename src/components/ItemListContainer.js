import React from "react";
import {Heading, Spinner} from "@chakra-ui/react";
import {ItemList} from "./ItemList"
import {products} from "../assets/products";
import {customFetch} from "../assets/customFetch";
import { useState, useEffect} from "react";


const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
        .then(res => {
            setLoading(false)
            setListProducts(res)
        })
    }, []);

    return (
        <>
        <Heading>{greeting}</Heading>
        {
        loading ?
        <Spinner/>
        :
        <ItemList listProducts = {listProducts} />
        }
        </>
    )    
}
export default ItemListContainer
