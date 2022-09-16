import SneakersItem from "./SneakersItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import MainSlider from "./MainSlider";

const Main = () => {
    const sneakersData = useSelector(state => state.sneakers.sneakers);
    const [searchValue, setsearchValue] = useState('');

    const searchOnChange = event => {
        setsearchValue(event.target.value)
    }

    const sneakersItems = sneakersData
        .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map(item => {
            return (
                <SneakersItem   name={item.name}
                                price={item.price}
                                img={item.img}
                                key={item.id}
                                id={item.id}
                />
            )
        })
    return (
        <main className="main">
            <div className="container">
                <MainSlider />
                <div className="main__title__wrapper">
                    <h2 className="main__title" id="main__title">
                        {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                    </h2>           
                    <div className="main__title__search">
                        <input placeholder="Поиск..." value={searchValue}  onChange={searchOnChange}/>
                        <img className="search-img" alt="search" src="/react-sneakers/img/search.png" />
                        {searchValue && <img className="clear-search" alt='clear search' src="/react-sneakers/img/delete.png"  onClick={() => setsearchValue('')}/>}                            
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