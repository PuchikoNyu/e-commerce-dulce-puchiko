import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/main/Cart';
import Footer from './components/footer/Footer';
import './App.css';
import CartProvider from "./context/CartContext";

function App () {

  return (
    <CartProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar saludo={'Bienvenido!!!'}/>
            <Routes>
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/description/:descriptionId' element={<ItemDetailContainer />} />
              <Route path='/cart' element= {<Cart />} />
              <Route path='/' element= {<ItemListContainer />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
  );
};

export default App;