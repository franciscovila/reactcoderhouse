import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';




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
    <ItemDetailContainer greeting='Bienvenidos' />
    </ChakraProvider>
    </>
  )
}

export default App;
