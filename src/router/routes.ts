// dependencies
import { Movies } from "../services/movies"
import { Shows } from "../services/shows"

// views
import HomeView from "../views/home/HomeView"
import DetailMovieView from "../views/movies/DetailMovieView"
import DetailShowView from "../views/shows/DetailShowView"
import ErrorView from "../views/error/ErrorView"

// types
interface Dependencies {
    [key: string] : any
}
export interface Routes {
    path: string|undefined
    name: string
    dependencies: Dependencies
    component: any
}

// instance of dependencies
const movies = new Movies()
const shows = new Shows()

// list of views
const routes : Array<Routes> = [
    {
        path: '/',
        name: 'home',
        dependencies: {
            movies,
            shows,
        },
        component: HomeView
    },
    {
        path: '/movie/:id',
        name: 'movie',
        dependencies: {
            movies,
        },
        component: DetailMovieView
    },
    {
        path: '/show/:id',
        name: 'show',
        dependencies: {
            shows,
        },
        component: DetailShowView
    },
    {
        path: undefined,
        name : 'error',
        dependencies: {},
        component: ErrorView
    },
]

export default routes