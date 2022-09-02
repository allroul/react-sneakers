import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import './App.css'
import './main.scss'

function App() {
  return (
    <div className='layout'>
      <Cart />
      <div className='main-content'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
