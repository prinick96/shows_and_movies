import { useEffect, useState } from "react"
import { Link } from "wouter"
import { IShows } from "../../services/shows"
import { Genre } from "../../types/genre"
import { Show } from "../../types/show"
import Loading from "../commons/Loading"
import Picture from "../commons/Picture"

interface SuggestedShowsDependencies {
    shows: IShows
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

    // define if the element can showed
    const isNotTheSameShow = (id: number) : string => {
        return id == dep.idShow ? 'display-none' : ''
    }

    // load shows
	useEffect(() => {
		getMovies()
	}, [])

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
                                    <Link key={s.id} to={'/show/' + s.id}> 
                                        <li key={s.id} className={isNotTheSameShow(s.id)}>
                                            <div className="suggested-item">
                                                <Picture size={185} path={s.poster_path} />
                                            </div>
                                        </li>
                                    </Link>
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