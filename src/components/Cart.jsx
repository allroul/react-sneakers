import React from 'react'
import { Transition } from 'react-transition-group'
import useVisibleCart from '../hooks/useVisibleCart'
import CartItem from './CartItem'
import '../main.scss'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartBodyRef, onCloseCart } = useVisibleCart()
  const isOpenCart = useSelector(({ cartStatus }) => cartStatus.status)

  return (
    <Transition in={isOpenCart} timeout={350}>
      {(classTransitions) => (
        <div className={`cart ${classTransitions}`}>
          <div className='cart__body' ref={cartBodyRef} onClick={onCloseCart}>
            <div className={`cart__content ${classTransitions}`}>
              <h3 className='cart__title'>Корзина</h3>
              <ul className='cart__list'>
                {[...Array(10)].map((_, i) => (
                  <CartItem key={i} />
                ))}
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
      )}
    </Transition>
  )
}

export default Cart
