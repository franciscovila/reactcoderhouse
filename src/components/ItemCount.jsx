import React, {useState} from 'react';

const MiComponente = ({stock, onAdd}) => {

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

return (
    <>
    <div>Mi Componente</div>
    <h1>{contador}</h1>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </>
)
}
export default MiComponente