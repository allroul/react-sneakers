import '../main.scss';
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartItemsSlice';

const CartItem = props => {
    const dispatch = useDispatch();

    const deleteItem = id => {
        dispatch(removeFromCart({id}))
    }
    return (
        <li className='cart__item'>
            <img className='cart__item__img' alt='cart item img' src={props.img} />
            <div className='cart__item__info'>
                <h2 className='cart__item__title'>
                    {props.name}
                </h2>
                <span className='cart__item__price'>
                   {props.price}
                </span>
            </div>
            <button type='button' className='cart__item__delete' onClick={() => deleteItem(props.id)}>
                <img alt='delete item' src="/react-sneakers/img/delete.png" />
            </button>
        </li>
    )
}

export default CartItem;