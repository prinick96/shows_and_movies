import { Link } from "wouter"
import { Movie } from "../types/movie"
import Picture from "./Picture"
import ShortInfo from "./ShortInfo"

// props for this component
interface ListOfMoviesProps {
	movies: Array<Movie>
}

function ListOfMovies(props: ListOfMoviesProps) {
    return (
        <ul className="list_of_movies">
            {
                props.movies.map((m) => {
                    return (
                        <li key={m.id}>
                            <div className="movie">
                                <Picture size={500} path={m.poster_path} />
                                <ShortInfo title={m.title} vote_average={m.vote_average} />
                                <Link to={'/movie/' + m.id} className="button">Select Movie</Link>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListOfMovies