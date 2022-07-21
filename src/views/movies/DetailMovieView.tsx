import { Link, useLocation } from "wouter"
import { IMovies } from "../../services/movies"
import Picture from "../../components/Picture"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import DetailContent from "../../components/DetailContent"
import Backdrop from "../../components/Backdrop"
import Votes from "../../components/Votes"
import { Movie } from "../../types/movie"

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

	// the current movie
	const [movie, setMovie] = useState({} as Movie)

	// get the movie
	const getMovie = async () => {
		try {
			const result = await dep.movies.getMovieDetailsById(dep.id)
			setMovie(result)
		} catch(error) {
			setLocation('/')
		}
        
		setLoading(false)
    }

	// load movie
	useEffect(() => {
		getMovie()
	}, [])

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
						relevantValue2: movie.budget.toString(),
						overview: movie.overview,
					}} />

					<Votes vote_average={movie.vote_average} vote_count={movie.vote_count} />

					<Link to="/" className="button">Back</Link>
				</div>
			</div>
		
		</section>
	)
}

export default DetailMovieView
