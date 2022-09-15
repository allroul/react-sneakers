import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState: {
    orders: []
  },
  reducers: {
    addToOrders(state, action) {     
      action.payload.map(item => {
        state.orders.push(item)
      })
    }
  },
})

export const { addToOrders } = ordersSlice.actions

export default ordersSlice.reducer