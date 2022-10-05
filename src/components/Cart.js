import React, { useContext } from "react";
import { Context } from "./CartContext";
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
          <h2 className={`tamanio ${estilo || ""}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((pedido) => (
            <>
              <h1 key={pedido.producto.id}>
                {pedido.producto.title}
                cantidad:
                {pedido.cantidad}
              </h1>
              <img src={pedido.producto.image} width="100px"></img>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Cart;
