import { useSelector } from 'react-redux';
import SneakersItem from './SneakersItem';
import { Link } from 'react-router-dom'
import '../main.scss'


const Favorites = () => {
    const favoriteData = useSelector(({favoriteItems}) => favoriteItems.favorites);

    const favoriteItems = favoriteData.map(item => {
        return (
            <SneakersItem key={item.id} name={item.name} price={item.price} img={item.img} id={item.id} isFavorite={true}/>
        )
        
    })

    return (
        <div className="inner__page">
            <div className='container'>
                {favoriteData.length > 0 ? (
                    <>
                        <h2 className="main__title">
                            <Link to='/'>
                                <img src="/react-sneakers/img/arrow-back.jpg" className="inner__page__back-btn" alt="arrow back" />
                            </Link>                    
                            My favorites
                        </h2>
                        <ul className="sneakers-list">
                            {favoriteItems}
                        </ul>
                    </>                    
                    ) : (
                        <div className='inner__page__empty'>
                            <img src='/react-sneakers/img/favorites-empty.png' alt='upset face'  className='inner__page__empty__face'/>
                            <h3>
                               No favorites :(
                            </h3>
                            <p>
                               You haven't added anything yet
                            </p>
                            <Link to='/'>
                                <button type='button' className='green-button inner__page__empty__btn'>
                                    Go back
                                    <img alt='arrow' src='/react-sneakers/img/arrow.png' />
                                </button>
                            </Link>                            
                        </div>
                    )
                }                
            </div>            
        </div>
    )
}

export default Favorites