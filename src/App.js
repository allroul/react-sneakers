import './App.css';
import React, { useState } from 'react';
import CartItem from './components/CartItem';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart'
import './main.scss'

function App() {
  return (
    <div className="layout">
      <Cart />
      <div className='main-content'>
        <Header />
        <Main />
      </div>     
    </div>
  );
}

export default App;
