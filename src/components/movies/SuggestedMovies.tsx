import { useEffect, useState } from "react"
import { IMovies } from "../../services/movies"
import { Genre } from "../../types/genre"
import { Movie } from "../../types/movie"
import Loading from "../commons/Loading"
import Picture from "../commons/Picture"

interface SuggestedMoviesDependencies {
    movies: IMovies
    selectIdMovie: any
    genres : Array<Genre>
    // id of the parent movie
    idMovie : number
}

function SuggestedMovies(dep: SuggestedMoviesDependencies) {
    // loading section status
	const [loading, setLoading] = useState(true)

    // the current movies suggested
	const [movies, setMovies] = useState([] as Array<Movie>)

    // get the movies
	const getMovies = async () => {
        const { results } = await dep.movies.getRelatedMoviesByGenres(dep.genres)
		setMovies(results.slice(0,8))
        setLoading(false)
    }

    // load movies
	useEffect(() => {
		getMovies()
	}, [])

    // new id movie
	const handleChangeIdMovie = (id : number) => {
		dep.selectIdMovie(id)
	}

    return (
        <div className="container">
            <div className="suggested">
                <h2>Recommendations</h2>

                {loading
                ?   <Loading />
                :   <ul className="list-suggested">
                        {
                            movies.map((m) => {
                                return (
                                    <li key={m.id} className={m.id == dep.idMovie ? 'display-none' : ''}>
                                        <div className="suggested-item" onClick={() => handleChangeIdMovie(m.id)}>
                                            <Picture size={185} path={m.poster_path} />
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

export default SuggestedMovies