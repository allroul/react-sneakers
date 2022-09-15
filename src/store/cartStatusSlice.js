import { createSlice } from '@reduxjs/toolkit'

const cartStatusSlice = createSlice({
  name: 'cartStatusSlice',
  initialState: {
    status: false,
  },
  reducers: {
    changeCartStatus(state, action) {
      state.status = action.payload
    },
  },
})

export const { changeCartStatus } = cartStatusSlice.actions

export default cartStatusSlice.reducer