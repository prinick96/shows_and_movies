import { IShows } from "../../services/shows"

// dependencies for this view
interface DetailMovieViewDependencies {
	shows: IShows
	id: number // from :id
}

// view for /show/:id
function DetailShowView(dep: DetailMovieViewDependencies) {
	return (
		<section className="container">
            <div className="detail">
			    <p>Show</p>
            </div>
		</section>
	)
}

export default DetailShowView
