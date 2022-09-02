import SneakersItem from "./SneakersItem";
import { useSelector } from "react-redux";

const Main = () => {
    const sneakersData = useSelector(state => state.sneakers.sneakers);

    const sneakersItems = sneakersData.map(item => {
        return (
            <SneakersItem name={item.name}
                          price={item.price}
                          img={item.img}
                          key={item.id}
            />
        )
    })
    return (
        <main className="main">
            <div className="container">
                <div className="main__title__wrapper">
                    <h1 className="main__title">
                        Все кроссовки
                    </h1>           
                    <div className="main__title__search">
                        <input placeholder="Поиск..." />
                        <img className="search-img" alt="search" src="img/search.png" />
                            
                    </div>         
                </div>
                <ul className="sneakers-list">
                    {sneakersItems}
                </ul>
            </div>
        </main>
    )
}

export default Main