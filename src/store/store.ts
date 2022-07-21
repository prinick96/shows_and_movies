import { configureStore } from "@reduxjs/toolkit"
import movies from "./slices/movies"
import shows from "./slices/shows"

const store = configureStore({
    reducer: {
        movies,
        shows
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ItemDispatch = typeof store.dispatch
export default store