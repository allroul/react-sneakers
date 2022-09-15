import '../main.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h2>
                404
            </h2>
            <p>
                Такой страницы не существует :(
            </p>
            <Link to='/'>
                <button className='green-button'>
                    Вернуться на главную
                </button>
            </Link>
            
        </div>
    )
}

export default NotFoundPage