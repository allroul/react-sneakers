import '../main.scss'

const SneakersItem = props => {
    return (
        <li className="sneakers-item">
            <a href="#" className="sneakers-item__favorites">
                <div className='favorite-wrapper'>
                    <img alt='favorite-unactive' className='favorite-unactive' src='img/favorite-unactive.jpg' />
                    <img alt='favorite-active' className='favorite-active' src='img/favorite-active.jpg' />
                </div>
            </a>
            <img src='img/sneakers/1.jpg' alt='sneakers-item'  className='sneakers-item__img'/>
            <h2 className='sneakers-item__title'>
                Мужские Кроссовки Nike Blazer Mid Suede
            </h2>
            <div className='sneakers-item__info'>
                <h3 className='sneakers-item__price'>
                    Цена:
                    <span>149$</span>
                </h3>
                <a href='#' className='sneakers-item__order'>
                    <div className='add-to-cart-wrapper'>
                        <img src='img/add-to-cart.jpg' alt='add to cart' className='add-to-cart-unactive'/>
                        <img src='img/added-to-cart.jpg' alt='added to cart' className='add-to-cart-active'/>
                    </div>                    
                </a>
            </div>
        </li>
    )
}

export default SneakersItem;