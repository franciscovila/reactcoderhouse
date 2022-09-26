import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './components/CartWidget';



const App = () => {

  const dash = "Bienvenidos";

  return (
    <>
    <BrowserRouter>
      <NavBar name='Francisco'/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={dash} />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={dash} />}/>
        <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<CartWidget />}/>
      </Routes>
    </BrowserRouter>
  </>
);
};

export default App;
