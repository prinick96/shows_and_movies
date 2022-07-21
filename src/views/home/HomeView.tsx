import { useCallback, useEffect, useState } from "react"
import ListOfMovies from "../../components/ListOfMovies"
import ListOfShows from "../../components/ListOfShows"
import Loading from "../../components/Loading"
import TabMovieSelector from "../../components/TabMovieSelector"
import { IMovies } from "../../services/movies"
import { IShows } from "../../services/shows"
import { Movie } from "../../types/movie"
import { Show } from "../../types/show"

// dependencies for this view
interface HomeViewDependencies {
	movies: IMovies,
	shows: IShows
}

// default view in /
function HomeView(dep : HomeViewDependencies) {
	// loading page status
	const [loading, setLoading] = useState(true)
	
	// the current tab, movies/shows list
	const [movie, setMovie] = useState(true)

	// list of all movies and shows from the api
	const [movies, setMovies] = useState([] as Array<Movie>)
	const [shows, setShows] = useState([] as Array<Show>)
	
	// current movie and show, showing in the carrousel
	const [actualMovie, setActualMovie] = useState(0)
	const [actualShow, setActualShow] = useState(0)

	// get the movies
	const getMovies = async () => {
        const { results } = await dep.movies.getMostPopularMovies()
		setMovies(results)
		setLoading(false)
    }

	// get the shows
	const getShows = async () => {
        const { results } = await dep.shows.getMostPopularShows()
		setShows(results)
    }

	// load movies and shows
	useEffect(() => {
		getMovies()
		getShows()
	}, [])

	// change current movie/show tab state
	const handleChangeTab = useCallback((is_movie : boolean) => {
		setMovie(is_movie)
	}, [])

	// change current movie in carrousel
	const handleChangeMovie = useCallback((movie : number) => {
		setActualMovie(movie)
	}, [])

	// change current show in carrousel
	const handleChangeShow = useCallback((show : number) => {
		setActualShow(show)
	}, [])

	// if the movies are loading
	if (loading) {
		return (
			<Loading page={true} />
		)
	}

	// if the movies are loaded
	return (
		<section className="container">
            <div className="home">
				<TabMovieSelector changeTab={handleChangeTab} movie={movie} />

				{movie
				? <ListOfMovies movies={movies} actualMovie={actualMovie} changeMovie={handleChangeMovie} />
				: <ListOfShows shows={shows}  actualShow={actualShow} changeShow={handleChangeShow} />}
            </div>
		</section>
	)
}

export default HomeView
