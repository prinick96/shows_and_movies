import { Link, useLocation } from "wouter"
import { IMovies } from "../../services/movies"
import Picture from "../../components/commons/Picture"
import { useCallback, useEffect, useState } from "react"
import Loading from "../../components/commons/Loading"
import DetailContent from "../../components/commons/DetailContent"
import Backdrop from "../../components/commons/Backdrop"
import Votes from "../../components/commons/Votes"
import { Movie } from "../../types/movie"
import SuggestedMovies from "../../components/movies/SuggestedMovies"

// dependencies for this view
interface DetailMovieViewDependencies {
	movies: IMovies
	id: number // from :id
}

// view for /movie/:id
function DetailMovieView(dep: DetailMovieViewDependencies) {
	// for move to another route
	const [,setLocation] = useLocation()

	// if the id isn't a number, just move to home
	if (isNaN(dep.id)) {
		setLocation('/')
	}

	// loading page status
	const [loading, setLoading] = useState(true)

	// id of current movie
	const [idMovie, setIdMovie] = useState(dep.id)

	// the current movie
	const [movie, setMovie] = useState({} as Movie)

	// get the movie
	const getMovie = async () => {
		try {
			setLoading(true)
			const result = await dep.movies.getMovieDetailsById(idMovie)
			setMovie(result)
		} catch(error) {
			setLocation('/')
		} finally {
			setLoading(false)
		}		
    }

	// new id movie
	const handleChangeIdMovie = useCallback((id : number) => {
		setLocation('/movie/' + id)
		setIdMovie(id)
	}, [])

	// load movie
	useEffect(() => {
		getMovie()
	}, [idMovie])

	// if the movie is loading
	if (loading) {
		return (
			<Loading page={true} />
		)
	}

	// if the movie is loaded
	return (
		<section className="detail">
			<div className="container">
				<div className="item-detail">
					<Backdrop path={movie.backdrop_path} />

					<Picture size={500} path={movie.poster_path} />
					
					<DetailContent detail={{
						title : movie.title,
						relevantName: "Released",
						relevantIcon: "📅",
						relevantValue: movie.release_date,
						relevantName2: "Budget",
						relevantIcon2: "💵",
						relevantValue2: '$' + movie.budget.toLocaleString("en-US"),
						overview: movie.overview,
					}} />

					<Votes vote_average={movie.vote_average} vote_count={movie.vote_count} />

					<Link to="/" className="button">Home</Link>
				</div>
			</div>
		
			{/* it have .container inside */}
			<SuggestedMovies idMovie={movie.id} genres={movie.genres} movies={dep.movies} selectIdMovie={handleChangeIdMovie} />
		</section>
	)
}

export default DetailMovieView
