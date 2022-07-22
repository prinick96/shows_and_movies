import { Link } from "wouter"
import useCarrousel from "../../hooks/carrousel"
import { Show } from "../../types/show"
import Picture from "../commons/Picture"
import ShortInfo from "../commons/ShortInfo"

// props for this component
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
        canShowPrevBtn,
        className
    } = useCarrousel(p.actualShow, p.shows.length, p.changeShow)

	return (
        <div className="carrousel">
            <a className={'previous ' + canShowPrevBtn()} onClick={handlePrevItem}>&laquo;</a>

            <ul className="list_of_ shows">
                {
                    p.shows.map((m, i) => {
                        return (
                            <li key={m.id} className={className(i)}>
                                <div className="show">
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