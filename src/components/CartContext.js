import React, { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart?.length)


  const añadir = (producto, cantidad) => {
    if (estaEnLista(producto.id)) {
    } else {
      setCart([...cart, { producto, cantidad }]);

    }
  };

  const borrar = (id) => {
    const arrayFiltrado = cart.filter((producto) => {
      return producto.id !== id;
    });
    setCart(arrayFiltrado);

  };

  const estaEnLista = (id) => cart.some((producto) => producto.id === id);

  const reset = () => {
    setCart([]);
  };

  return (
    <Context.Provider
      value={{
        cart,
        añadir,
        borrar,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomProvider;
