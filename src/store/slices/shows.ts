import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

// shows slice struct
interface showsState {
    lastShowSeen: number
}

// initial state for shows slice
const initialState : showsState = {
    lastShowSeen : 0,
}

// the shows slice
export const showsSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        // set the last show seen
        setLastShowSeen : (state, action: PayloadAction<number>) => {
            state.lastShowSeen = action.payload
        },
    }
})
export const { setLastShowSeen } = showsSlice.actions
export default showsSlice.reducer