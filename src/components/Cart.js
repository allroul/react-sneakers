import '../main.scss'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartSlice'
import CartItem from './CartItem'

const Cart = props => {
    const dispatch = useDispatch();
    const cartStatus = useSelector(state => state.cartStatus.status);

    const cartRef = useRef(null);
    useEffect(() => {
        if(cartStatus == true) {
            cartRef.current.addEventListener('click', e => {                
                if(!e.target.closest('.cart__content')) {
                    dispatch(changeCartStatus(false))
                }
            })
        }
    }, [cartStatus])
    
        
    

    return (
        <div className={`cart ${cartStatus ? 'opened' : ''}`} ref={cartRef}>
            <div className='cart__body'>
                <div className='cart__content'>
                    <h3 className='cart__title'>
                        Корзина
                    </h3>
                    <ul className='cart__list'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </ul>  
                    <div className='cart__total'>
                        <div className='cart__total__price d-flex'>
                            <span>
                                Итого
                            </span>  
                            <div className='cart__total__price-dashed'>

                            </div>
                            <span className='cart__total__price-number'>
                                1298$
                            </span>
                        </div>  
                        <div className='cart__total__tax d-flex'>
                            <span>
                                Налог 8% 
                            </span>
                            <div className='cart__total__tax-dashed'>

                            </div>
                            <span className='cart__total__tax-number'>
                                112$
                            </span>
                        </div>
                        <button type='button' className='cart__total__submit'>
                            Оформить заказ
                            <img alt='arrow' src="img/arrow.png" />
                        </button>
                    </div>         
                </div>
            </div>
      </div>
    )
}

export default Cart