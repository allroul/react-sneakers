import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartSlice'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import CartItem from './CartItem'
import '../main.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const cartBodyRef = useRef()

  useLockBodyScroll()

  return (
    <div className='cart opened'>
      <div
        className='cart__body'
        ref={cartBodyRef}
        onClick={({ target }) => (target == cartBodyRef.current) && dispatch(changeCartStatus(false))}
      >
        <div className='cart__content'>
          <h3 className='cart__title'>Корзина</h3>
          <ul className='cart__list'>
            {[...Array(10)].map((_, i) => <CartItem key={i} />)}
          </ul>
          <div className='cart__total'>
            <div className='cart__total__price d-flex'>
              <span>Итого</span>
              <div className='cart__total__price-dashed'></div>
              <span className='cart__total__price-number'>1298$</span>
            </div>
            <div className='cart__total__tax d-flex'>
              <span>Налог 8%</span>
              <div className='cart__total__tax-dashed'></div>
              <span className='cart__total__tax-number'>112$</span>
            </div>
            <button type='button' className='cart__total__submit'>
              Оформить заказ
              <img alt='arrow' src='img/arrow.png' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
