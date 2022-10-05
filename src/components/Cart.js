import React, { useContext } from 'react';
import { Context} from './CartContext';
import { Link } from "react-router-dom";

const Cart = ({ condicion, estilo }) => {
    const { cart } = useContext(Context);

    return (
        <>
        {cart.length === 0 ? (
            <>
            <h1 className={condicion ? "rojo" : "azul"}>
                No agregaste productos, puedes ver <Link to="/">aca</Link>
            </h1>
            <h2 className={`tamanio ${estilo || ''}`}>
                Gracias por tu visita
            </h2>
            </>
        ) : (
            <>
            {cart.map((producto) => {
                return <h1 key={producto.id}>{producto.title}</h1>
            })}
            </>
        )}
        </>
    );
    };

    export default Cart;