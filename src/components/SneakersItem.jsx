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
                        <img alt='favorite-unactive' className='favorite-unadded' src='img/favorite-unactive.jpg' />
                        <img alt='favorite-active' className='favorite-added' src='img/favorite-active.jpg' />
                    </div>
                </button>
            }
            
            <img src={props.img} alt='sneakers-item'  className='sneakers-item__img'/>
            <h2 className='sneakers-item__title'>
                {props.name}
            </h2>
            <div className='sneakers-item__info'>
                <h3 className='sneakers-item__price'>
                    Цена:
                    <span>{props.price}$</span>
                </h3>
                {props.isOrdered ? null : 
                    <button type='button' className='sneakers-item__order' onClick={() => {addedToCart ? removeItemFromCart(id) : addItemToCart(props)}} >
                        <div className={`add-to-cart-wrapper ${cartContainsObj() == true && addedToCart == true ? 'added' : ''}`}>
                            <img src='img/add-to-cart.jpg' alt='add to cart' className='add-to-cart-unadded'/>
                            <img src='img/added-to-cart.jpg' alt='added to cart' className='add-to-cart-added'/>
                        </div>                    
                    </button>
                }
                
            </div>
        </li>
    )
}

export default SneakersItem;