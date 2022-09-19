import SneakersItem from "./SneakersItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import MainSlider from "./MainSlider";
import { useRef } from "react";

const Main = () => {
    const sneakersData = useSelector(state => state.sneakers.sneakers);
    const [searchValue, setsearchValue] = useState('');  
    const mainTitleRef = useRef(null);  

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
                <MainSlider mainTitle={mainTitleRef}/>
                <div className="main__title__wrapper">
                    <h2 className="main__title" id="main__title" ref={mainTitleRef}>
                        {searchValue ? `Searching: "${searchValue}"` : 'All shoes'}
                    </h2>           
                    <div className="main__title__search">
                        <input placeholder="Search..." value={searchValue}  onChange={searchOnChange}/>
                        <img className="search-img" alt="search" src="/react-sneakers/img/search.png" />
                        {searchValue && 
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="clear-search" xmlns="http://www.w3.org/2000/svg" onClick={() => setsearchValue('')}>
                            <path d="M19.6946 6.55359L18.2846 5.14359L12.6946 10.7336L7.10464 5.14359L5.69464 6.55359L11.2846 12.1436L5.69464 17.7336L7.10464 19.1436L12.6946 13.5536L18.2846 19.1436L19.6946 17.7336L14.1046 12.1436L19.6946 6.55359Z" fill="black"/>
                        </svg>
                        }                            
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