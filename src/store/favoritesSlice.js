import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState: {
    favorites: []
  },
  reducers: {
    addToFavorites(state, action) {       
        state.favorites = [...state.favorites, action.payload]
    },
    removeFromFavorites(state, action) {
        state.favorites = state.favorites.filter(item => item.id !== action.payload.id)
    }
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer