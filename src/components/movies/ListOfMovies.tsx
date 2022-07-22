import { Link } from "wouter"
import useCarrousel from "../../hooks/carrousel"
import { Movie } from "../../types/movie"
import Picture from "../commons/Picture"
import ShortInfo from "../commons/ShortInfo"

// props for this component
interface ListOfMoviesProps {
	movies: Array<Movie>
    actualMovie: number
    changeMovie: any
}

function ListOfMovies(p: ListOfMoviesProps) {
    const { 
        handlePrevItem,
        handleNextItem,
        canShowNextBtn,
        canShowPrevBtn,
        className
    } = useCarrousel(p.actualMovie, p.movies.length, p.changeMovie)
    
    return (
        <div className="carrousel">
            <a className={'previous ' + canShowPrevBtn()} onClick={handlePrevItem}>&laquo;</a>

            <ul className="list_of_ movies">
                {
                    p.movies.map((m, i) => {
                        return (
                            <li key={m.id} className={className(i)}>
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

            <a  className={'next ' + canShowNextBtn()} onClick={handleNextItem}>&raquo;</a>
        </div>
    )
}

export default ListOfMovies