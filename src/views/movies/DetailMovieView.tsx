import { IMovies } from "../../services/movies"

// dependencies for this view
interface DetailMovieViewDependencies {
	movies: IMovies
	id: number // from :id
}

// view for /movie/:id
function DetailMovieView(dep: DetailMovieViewDependencies) {
	console.log(dep.id)
	console.log(dep.movies)

	return (
		<section className="container">
            <div className="detail">
			    <p>Movie</p>
            </div>
		</section>
	)
}

export default DetailMovieView
