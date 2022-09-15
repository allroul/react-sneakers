import { createSlice } from '@reduxjs/toolkit'

const cartItemsSlice = createSlice({
  name: 'cartItemsSlice',
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addToCart(state, action) {       
        state.items = [...state.items, action.payload]
    },
    removeFromCart(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    setPrice(state, action) {
      state.totalPrice = action.payload
    },
    clearCart(state, action) {
      if(action.payload == true) {
        state.items = []
      }
    }
  },
})


export const { addToCart, removeFromCart, setPrice, clearCart } = cartItemsSlice.actions

export default cartItemsSlice.reducer