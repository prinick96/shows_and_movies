interface ShortInfoProps {
    // title of movie/show
    title: string
    // average of votes
    vote_average: number
}

// show the short info in home carrousel for movie/show
function ShortInfo(props: ShortInfoProps) {
    return (
        <div className="short-content">
            <h1 className="title">{props.title}</h1>
            <span className="votes">⭐ {props.vote_average} of 10</span>
        </div>
    )
}

export default ShortInfo