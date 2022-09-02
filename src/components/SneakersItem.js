import React, { useState } from 'react';
import '../main.scss'

const SneakersItem = props => {
    const [addedToCart, changeCartStatus] = useState(false);

    return (
        <li className="sneakers-item">
            <a href="#" className="sneakers-item__favorites">
                <div className='favorite-wrapper'>
                    <img alt='favorite-unactive' className='favorite-unactive' src='img/favorite-unactive.jpg' />
                    <img alt='favorite-active' className='favorite-active' src='img/favorite-active.jpg' />
                </div>
            </a>
            <img src={props.img} alt='sneakers-item'  className='sneakers-item__img'/>
            <h2 className='sneakers-item__title'>
                {props.name}
            </h2>
            <div className='sneakers-item__info'>
                <h3 className='sneakers-item__price'>
                    Цена:
                    <span>{props.price}$</span>
                </h3>
                <button type='button' className='sneakers-item__order' onClick={() => changeCartStatus(!addedToCart)} >
                    <div className={`add-to-cart-wrapper ${addedToCart ? 'added' : ''}`}>
                        <img src='img/add-to-cart.jpg' alt='add to cart' className='add-to-cart-unadded'/>
                        <img src='img/added-to-cart.jpg' alt='added to cart' className='add-to-cart-added'/>
                    </div>                    
                </button>
            </div>
        </li>
    )
}

export default SneakersItem;