import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/main/Cart';
import Footer from './components/footer/Footer';
import { productos } from "./components/main/ItemsList";
import { cartContext } from "./context/cartContext";
import './App.css';

export const appContext = createContext([])

function App () {

  const [prods, setProds] = useState(productos);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar saludo={'Bienvenido!!!'}/>
        <Routes>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/description/:descriptionId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={
            <cartContext.Provider value= {{}}>
            <Cart />
            </cartContext.Provider>
          } />
          <Route path='/' element={
            <appContext.Provider value= {{prods}}>
            <ItemListContainer />
            </appContext.Provider> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;