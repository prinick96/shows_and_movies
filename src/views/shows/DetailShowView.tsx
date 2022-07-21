import { useCallback, useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import Backdrop from "../../components/commons/Backdrop"
import DetailContent from "../../components/commons/DetailContent"
import Loading from "../../components/commons/Loading"
import Picture from "../../components/commons/Picture"
import SuggestedShows from "../../components/shows/SuggestedShows"
import Votes from "../../components/commons/Votes"
import { IShows } from "../../services/shows"
import { Show } from "../../types/show"

// dependencies for this view
interface DetailShowViewDependencies {
	shows: IShows
	id: number // from :id
}

// view for /show/:id
function DetailShowView(dep: DetailShowViewDependencies) {
	// for move to another route
	const [,setLocation] = useLocation()

	// if the id isn't a number, just move to home
	if (isNaN(dep.id)) {
		setLocation('/')
	}

	// loading page status
	const [loading, setLoading] = useState(true)

	// id of current show
	const [idShow, setIdShow] = useState(dep.id)

	// the current movie
	const [show, setShow] = useState({} as Show)

	// get the show
	const getShow = async () => {
		try {
			setLoading(true)
			const result = await dep.shows.getShowDetailsById(idShow)
			setShow(result)
		} catch(error) {
			setLocation('/')
		} finally {
			setLoading(false)
		}
    }

	// new id show
	const handleChangeIdShow = useCallback((id : number) => {
		setLocation('/show/' + id)
		setIdShow(id)
	}, [])

	// load show
	useEffect(() => {
		getShow()
	}, [idShow])

	// if the show is loading
	if (loading) {
		return (
			<Loading page={true} />
		)
	}

	// if the show is loaded
	return (
		<section className="detail">
			<div className="container">
				<div className="item-detail">
					<Backdrop path={show.backdrop_path} />

					<Picture size={500} path={show.poster_path} />
					
					<DetailContent detail={{
						title : show.name,
						relevantName: "First time in Air",
						relevantIcon: "📅",
						relevantValue: show.first_air_date,
						relevantName2: "Last time in Air",
						relevantIcon2: "📅",
						relevantValue2: show.last_air_date,
						overview: show.overview,
					}} />

					<Votes vote_average={show.vote_average} vote_count={show.vote_count} />

					<Link to="/" className="button">Home</Link>
				</div>
			</div>
			
			{/* it have .container inside */}
			<SuggestedShows idShow={show.id} genres={show.genres} shows={dep.shows} selectIdShow={handleChangeIdShow} />
		</section>
	)
}

export default DetailShowView
