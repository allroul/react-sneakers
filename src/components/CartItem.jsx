import '../main.scss'

const CartItem = props => {
    return (
        <li className='cart__item'>
            <img className='cart__item__img' alt='cart item img' src='img/sneakers/1.jpg' />
            <div className='cart__item__info'>
                <h2 className='cart__item__title'>
                    Мужские Кроссовки Nike Air Max 270
                </h2>
                <span className='cart__item__price'>
                    169$
                </span>
            </div>
            <a href='#' className='cart__item__delete'>
                <img alt='delete item' src="img/delete.png" />
            </a>
        </li>
    )
}

export default CartItem;