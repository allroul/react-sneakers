import { configureStore, combineReducers } from '@reduxjs/toolkit'
import sneakersSlice from './sneakersSlice'
import cartStatusSlice from './cartStatusSlice'
import cartItemsSlice from './cartItemsSlice'
import favoritesSlice from './favoritesSlice'
import ordersSlice from './ordersSlice'

const rootReducer = combineReducers({
  sneakers: sneakersSlice,
  cartStatus: cartStatusSlice,
  cartItems: cartItemsSlice,
  favoriteItems: favoritesSlice,
  orders: ordersSlice
})

export default configureStore({ reducer: rootReducer })
