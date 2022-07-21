import { useEffect, useState } from "react"
import { IShows } from "../../services/shows"
import { Genre } from "../../types/genre"
import { Show } from "../../types/show"
import Loading from "../commons/Loading"
import Picture from "../commons/Picture"

interface SuggestedShowsDependencies {
    shows: IShows
    selectIdShow: any
    genres : Array<Genre>
    // id of the parent show
    idShow : number
}

function SuggestedShows(dep: SuggestedShowsDependencies) {
    // loading section status
	const [loading, setLoading] = useState(true)

    // the current shows suggested
	const [shows, setShows] = useState([] as Array<Show>)

    // get the shows
	const getMovies = async () => {
        const { results } = await dep.shows.getRelatedShowsByGenres(dep.genres)
		setShows(results.slice(0,8))
        setLoading(false)
    }

    // load shows
	useEffect(() => {
		getMovies()
	}, [])

    // new id show
	const handleChangeIdShow = (id : number) => {
		dep.selectIdShow(id)
	}

    return (
        <div className="container">
            <div className="suggested">
                <h2>Recommendations</h2>

                {loading
                ?   <Loading />
                :   <ul className="list-suggested">
                        {   
                            shows.map((s) => {
                                return (
                                    <li key={s.id} className={s.id == dep.idShow ? 'display-none' : ''}>
                                        <div className="suggested-item" onClick={() => handleChangeIdShow(s.id)}>
                                            <Picture size={185} path={s.poster_path} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                }

            </div>
        </div>  
    )
}

export default SuggestedShows