import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

// movies slice struct
interface moviesState {
    lastMovieSeen: number
}

// initial state for movies slice
const initialState : moviesState = {
    lastMovieSeen : 0,
}

// the movies slice
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // set the last movie seen
        setLastMovieSeen : (state, action: PayloadAction<number>) => {
            state.lastMovieSeen = action.payload
        },
    }
})
export const { setLastMovieSeen } = moviesSlice.actions
export default moviesSlice.reducer