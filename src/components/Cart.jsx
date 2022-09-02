import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../main.scss'
import { changeCartStatus } from '../store/cartSlice'
import CartItem from './CartItem'

const Cart = () => {
  const dispatch = useDispatch()
  const cartRef = useRef(null)
  const cartStatus = useSelector(({ cartStatus }) => cartStatus.status)
  const cartStyles = cartStatus ? 'cart opened' : 'cart'

  useEffect(() => {
    const docBody = document.body
    const bodyWidth = docBody.offsetWidth
    const lockPaddingValue = window.innerWidth - bodyWidth

    console.log(lockPaddingValue)

    if (cartStatus) {
      docBody.style.overflow = 'hidden'
      docBody.style.paddingRight = `${lockPaddingValue}px`
      cartRef.current.addEventListener('click', (e) => {
        if (!e.target.closest('.cart__content')) {
          dispatch(changeCartStatus(false))
        }
      })
    } else {
      document.body.style.overflow = ''
      docBody.style.paddingRight = `0px`
    }
  }, [cartStatus, dispatch])

  return (
    <div className={cartStyles} ref={cartRef}>
      <div className='cart__body'>
        <div className='cart__content'>
          <h3 className='cart__title'>Корзина</h3>
          <ul className='cart__list'>
            <CartItem />
            <CartItem />
            <CartItem />
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
