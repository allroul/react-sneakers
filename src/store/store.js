import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    sneakers: sneakersReducer
})

export default store