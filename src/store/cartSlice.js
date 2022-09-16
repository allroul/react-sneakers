import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    status: false,
  },
  reducers: {
    changeCartStatus(state, action) {
      state.status = action.payload
    },
  },
})

export const { changeCartStatus } = cartSlice.actions

export default cartSlice.reducer