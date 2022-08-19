import { createSlice } from "@reduxjs/toolkit";

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: {
        sneakers: [],
        status: null,
        error: null
    }
})