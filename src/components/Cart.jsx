import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import useVisibleCart from '../hooks/useVisibleCart'
import CartItem from './CartItem'
import '../main.scss'
import { useSelector, useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartStatusSlice'
import { addToOrders } from '../store/ordersSlice'
import CartInfo from './CartInfo'
import { clearCart } from '../store/cartItemsSlice'

const Cart = () => {
  const isOpenCart = useSelector(({ cartStatus }) => cartStatus.status);
  const cartItems = useSelector(({cartItems}) => cartItems.items);
  const totalPrice = useSelector(({cartItems}) => cartItems.totalPrice)
  const dispatch = useDispatch();
  const { cartBodyRef, onCloseCart } = useVisibleCart(isOpenCart); 
  const [orderStatus, setOrderStatus] = useState(false)
  const [orderNumber, setOrderNumber] = useState(0)

  const cartList = (
    <ul className='cart__list'>
      {cartItems.map((item, i) => (
        <CartItem key={i} 
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  id={item.id}                  
        />
      ))}
    </ul>
  )

  const makeOrder = items => {
    dispatch(addToOrders(items))
    setOrderNumber(orderNumber + 1)
    dispatch(clearCart(true));
    setOrderStatus(true) 

  }

  useEffect(() => {
    if(orderStatus == true && isOpenCart == false) {
      setTimeout(() => {
        setOrderStatus(false)
      }, 1000)      
    }

  }, [isOpenCart])

  const cartTotal = (
    <div className='cart__total'>
      <div className='cart__total__price d-flex'>
        <span>Total</span>
        <div className='cart__total__price-dashed'></div>
        <span className='cart__total__price-number'>$ {totalPrice}</span>
      </div>
      <div className='cart__total__tax d-flex'>
        <span>Tax 8%</span>
        <div className='cart__total__tax-dashed'></div>
        <span className='cart__total__tax-number'>$ {(totalPrice*0.08).toFixed(1)}</span>
      </div>
      <button onClick={() => makeOrder(cartItems)} type='button' className='green-button cart__total__submit'>
        Buy now
        <img alt='arrow' src='/react-sneakers/img/arrow.png' />
      </button>
    </div>
  )

  return (
    <Transition in={isOpenCart} timeout={350}>
      {(classTransitions) => (
        <div className={`cart ${classTransitions}`}>
          <div className='cart__body' ref={cartBodyRef} onClick={onCloseCart}>
            <div className={`cart__content ${classTransitions}`}>
              <h3 className='cart__title'>
                Cart
                <img src='/react-sneakers/img/close-cart.png' alt='close cart' onClick={() => dispatch(changeCartStatus(false))} />
              </h3>
              {cartItems.length > 0 ? 
                (cartList) : orderStatus 
                ? <CartInfo title='Your order is complete!' image='/react-sneakers/img/order-completed.jpg' text={`Your order #${orderNumber} will soon be transferred to the delivery service`} completed/> 
                : <CartInfo title='Cart is empty' image='/react-sneakers/img/cart-empty.png' text='Add at least one item to the order'/>}      
              {cartItems.length > 0 ? (cartTotal) : null}                  
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Cart
