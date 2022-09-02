import { createSlice } from "@reduxjs/toolkit";

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: {
        sneakers: [
            {
                id: 1,
                name: 'Мужские Кроссовки Nike Blazer Mid Suede',
                price:  169,
                img: 'img/sneakers/1.jpg'                
            },
            {
                id: 2,
                name: 'Мужские Кроссовки Nike Air Max 270',
                price:  229,
                img: 'img/sneakers/2.jpg'                
            },
            {
                id: 3,
                name: 'Мужские Кроссовки Nike Air Max 270',
                price:  179,
                img: 'img/sneakers/3.jpg'                
            },
            {
                id: 4,
                name: 'Кроссовки Puma X Aka Boku Future Rider',
                price:  219,
                img: 'img/sneakers/4.jpg'                
            },
            {
                id: 5,
                name: 'Мужские Кроссовки Under Armour Curry 8',
                price:  189,
                img: 'img/sneakers/5.jpg'                
            },
            {
                id: 6,
                name: 'Мужские Кроссовки Nike Kyrie 7',
                price:  175,
                img: 'img/sneakers/6.jpg'                
            },
            {
                id: 7,
                name: 'Мужские Кроссовки Jordan Air Jordan 11',
                price:  179,
                img: 'img/sneakers/7.jpg'                
            },
            {
                id: 8,
                name: 'Мужские Кроссовки Nike LeBron XVIII',
                price:  199,
                img: 'img/sneakers/8.jpg'                
            },
            {
                id: 9,
                name: 'Мужские Кроссовки Nike Lebron XVIII Low',
                price:  249,
                img: 'img/sneakers/9.jpg'                
            },
            {
                id: 10,
                name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
                price:  229,
                img: 'img/sneakers/10.jpg'                
            },
        ],
        status: null,
        error: null
    }
})

export default sneakersSlice.reducer;