import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MiComponente from './components/MiComponente';



const App = () => {

  const onAdd = (count) => {
    console.log('Producto agregado al carrito')
  }

  onAdd()

  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos' />
    <MiComponente stock={10} onAdd={onAdd}  />
    </>
  )
}

export default App;
