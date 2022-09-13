import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




const App = () => {

  const onAdd = (count) => {
    console.log('Producto agregado al carrito')
  }

  onAdd()

  return (
    <>
    <ChakraProvider>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos' />
    <ItemCount stock={10} onAdd={onAdd}  />
    </ChakraProvider>
    </>
  )
}

export default App;
