import { useEffect, useState } from "react"
import { Link } from "wouter"
import { IMovies } from "../../services/movies"
import { Movie } from "../../types/movie"
import Loading from "../commons/Loading"
import Picture from "../commons/Picture"

interface SuggestedMoviesDependencies {
    movies: IMovies
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
        const { results } = await dep.movies.getRelatedMoviesByGenres(dep.idMovie)
		setMovies(results.slice(0,8))
        setLoading(false)
    }

    // define if the element can showed
    const isNotTheSameMovie = (id: number) : string => {
        return id == dep.idMovie ? 'display-none' : ''
    }

    // load movies
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
                            movies.map((m) => {
                                return (
                                    <Link key={m.id} to={'/movie/' + m.id}> 
                                        <li className={isNotTheSameMovie(m.id)}>
                                            <div className="suggested-item">
                                                <Picture size={185} path={m.poster_path} />
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

export default SuggestedMovies