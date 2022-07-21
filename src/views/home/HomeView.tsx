import { IMovies } from "../../services/movies"
import { IShows } from "../../services/shows"

// dependencies for this view
interface HomeViewDependencies {
	movies: IMovies,
	shows: IShows
}

// default view in /
function HomeView(dep : HomeViewDependencies) {
	return (
		<section className="container">
            <div className="home">
			    <p>Home</p>
            </div>
		</section>
	)
}

export default HomeView
