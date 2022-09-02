import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sneakersSlice from "./sneakersSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
    sneakers: sneakersSlice,
    cartStatus: cartSlice
})


export default configureStore({
    reducer: rootReducer
})

