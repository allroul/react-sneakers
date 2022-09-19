import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../store/cartItemsSlice';
import { addToFavorites, removeFromFavorites } from '../store/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import '../main.scss'

const SneakersItem = props => {
    const dispatch = useDispatch();
    const id = props.id;
    const [addedToCart, changeCartStatus] = useState(false);
    const [addedToFavorites, changeFavoritesStatus] = useState(false);
    const favoriteArray = useSelector(({favoriteItems}) => favoriteItems.favorites);
    const itemsInCart = useSelector(({cartItems}) => cartItems.items);
    
    
    const cartContainsObj = () => {
        if(itemsInCart.some(item => item.id == id)) {
            return true
        } else {
            return false
        }        
    }
    

    const addItemToCart = props => {        
        dispatch(addToCart(props));

        changeCartStatus(true)
    }

    const removeItemFromCart = id => {
        dispatch(removeFromCart({id: id}))

        changeCartStatus(false)
    }

    const addItemToFavorites = props => {
        dispatch(addToFavorites(props));
        
        changeFavoritesStatus(!addedToFavorites)
    }

    const removeItemFromFavorites = id => {
        dispatch(removeFromFavorites({id: id}))

        changeFavoritesStatus(!addedToFavorites)
    }

    useEffect(() => {
        if(props.isFavorite) {
            changeFavoritesStatus(true)
        }
        favoriteArray.map(item => {
            if(item.id == id) {
                changeFavoritesStatus(true)
            }
        })   

        if(itemsInCart.length > 0) {
            if(itemsInCart.some(item => item.id == id)) {
                changeCartStatus(true)
            } else {
                changeCartStatus(false)
            }
        }

        
    },[])


    return (
        <li className="sneakers-item">
            {props.isOrdered ? null : 
                <button type='button' className="sneakers-item__favorites" onClick={() => {addedToFavorites ? removeItemFromFavorites(id) : addItemToFavorites(props)}}>
                    <div className={`favorite-wrapper ${addedToFavorites || props.isFavorite ? 'added' : ''}`}>  
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F0F0F0"/>
                            <path d="M13.125 11C11.3994 11 10 12.385 10 14.0937C10 15.4731 10.5469 18.7469 15.93 22.0563C16.0264 22.1149 16.1371 22.146 16.25 22.146C16.3629 22.146 16.4736 22.1149 16.57 22.0563C21.9531 18.7469 22.5 15.4731 22.5 14.0937C22.5 12.385 21.1006 11 19.375 11C17.6494 11 16.25 12.875 16.25 12.875C16.25 12.875 14.8506 11 13.125 11Z" stroke="#E1E1E1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_60_999" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFB0B0"/>
                                    <stop offset="1" stopColor="#FF4343"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </button>
            }
            
            <img src={props.img} alt='sneakers-item'  className='sneakers-item__img'/>
            <h2 className='sneakers-item__title'>
                {props.name}
            </h2>
            <div className='sneakers-item__info'>
                <h3 className='sneakers-item__price'>
                    Price:
                    <span>$ {props.price}</span>
                </h3>
                {props.isOrdered ? null : 
                    <button type='button' className='sneakers-item__order' onClick={() => {addedToCart ? removeItemFromCart(id) : addItemToCart(props)}} >
                        <div className={`add-to-cart-wrapper ${cartContainsObj() == true && addedToCart == true ? 'added' : ''}`}>
                            <img src='/react-sneakers/img/add-to-cart.jpg' alt='add to cart' className='add-to-cart-unadded'/>
                            <img src='/react-sneakers/img/added-to-cart.jpg' alt='added to cart' className='add-to-cart-added'/>
                        </div>                    
                    </button>
                }
                
            </div>
        </li>
    )
}

export default SneakersItem;