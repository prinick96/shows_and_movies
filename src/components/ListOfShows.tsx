import { Link } from "wouter"
import useCarrousel from "../hooks/carrousel"
import { Show } from "../types/show"
import Picture from "./Picture"
import ShortInfo from "./ShortInfo"

// p for this component
interface ListOfShowsProps {
	shows: Array<Show>
    actualShow: number
    changeShow: any
}

function ListOfShows(p: ListOfShowsProps) {
    const { 
        handlePrevItem,
        handleNextItem,
        canShowNextBtn,
        canShowPrevBtn
    } = useCarrousel(p.actualShow, p.shows.length, p.changeShow)

	return (
        <div className="carrousel">
            <a className={'previous ' + canShowPrevBtn()} onClick={handlePrevItem}>&laquo;</a>

            <ul className="list_of_ shows">
                {
                    p.shows.map((m, i) => {
                        return (
                            <li key={m.id} className={p.actualShow != i ? 'display-none' : ''}>
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

            <a className={'next ' + canShowNextBtn()} onClick={handleNextItem}>&raquo;</a>
        </div>
    )
}

export default ListOfShows