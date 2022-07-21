import { Link } from "wouter"
import { Show } from "../types/show"
import Picture from "./Picture"
import ShortInfo from "./ShortInfo"

// props for this component
interface ListOfShowsProps {
	shows: Array<Show>
}

function ListOfShows(props: ListOfShowsProps) {
	return (
        <ul className="list_of_movies">
            {
                props.shows.map((m) => {
                    return (
                        <li key={m.id}>
                            <div className="movie">
                                <Picture size={500} path={m.poster_path} />
                                <ShortInfo title={m.name} vote_average={m.vote_average} />
                                <Link to={'/show/' + m.id} className="button">Select Show</Link>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListOfShows