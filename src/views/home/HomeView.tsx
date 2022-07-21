import { useCallback, useEffect, useState } from "react"
import ListOfMovies from "../../components/ListOfMovies"
import ListOfShows from "../../components/ListOfShows"
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
	const [movie, setMovie] = useState(true)
	const [movies, setMovies] = useState([] as Array<Movie>)
	const [shows, setShows] = useState([] as Array<Show>)

	// get the movies
	const getMovies = async () => {
        const { results } = await dep.movies.getMostPopularMovies()
		setMovies(results)
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

	// change actually movie state
	const handleChangeTab = useCallback((is_movie : boolean) => {
		setMovie(is_movie)
	}, [])

	return (
		<section className="container">
            <div className="home">
				<TabMovieSelector changeTab={handleChangeTab} movie={movie} />

				{movie
				? <ListOfMovies movies={movies}></ListOfMovies>
				: <ListOfShows shows={shows}></ListOfShows>}
            </div>
		</section>
	)
}

export default HomeView
