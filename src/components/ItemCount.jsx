import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Button } from "@mui/material";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1);

    
    const sumar = () => {
    if (contador < stock){
        setContador(contador + 1)  
    }
}


    const restar = () => {
        if (contador > 1){
        setContador(contador - 1);
    }
}
    const agregarAlCarrito = () => {
        onAdd(contador);
    }

    const finalizarCompra = () => {

    }
    

return (
    <>
    <div>Mi Componente</div>
    <h1>{contador}</h1>
    <Button onClick={sumar}>Sumar</Button>
    <Button onClick={restar}>Restar</Button>
    <Button onClick={agregarAlCarrito}>Agregar al carrito</Button>
    <Link to={`/cart`}>
        <Button size="small" color="primary">
            Finalizar compra
        </Button>
        </Link>

    </>
)
}
export default ItemCount