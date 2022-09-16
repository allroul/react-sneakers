import '../main.scss'
import { useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartStatusSlice';

const CartInfo = props => {
    const dispatch = useDispatch();

    return (
        <div className='cart__empty'>
            <img src={props.image} alt='cart image' className='cart__empty__img' />
            <h3 className='cart__empty__title' style={props.completed ? {color: '#87C20A'} : null}>
                {props.title}
            </h3>
            <p className='cart__empty__text'>
                {props.text}
            </p>
            <button onClick={() => dispatch(changeCartStatus(false))} type='button' className='green-button cart__empty__button'>
                Вернуться назад
                <img alt='arrow' src='/react-sneakers/img/arrow.png' />
            </button>
        </div>
    )
}

export default CartInfo