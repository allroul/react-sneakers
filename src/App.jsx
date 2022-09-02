import React from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import './App.css'
import './main.scss'

function App() {
  const isOpenCart = useSelector(({ cartStatus }) => cartStatus.status)

  return (
    <div className='layout'>
      {isOpenCart && <Cart />}
      <div className='main-content'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
