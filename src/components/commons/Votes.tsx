interface VotesProps {
    // average
    vote_average: number

    // total votes
    vote_count: number
}

// show the votes average and total votes in detail page of movie/show
function Votes(props : VotesProps) {
    return (
        <span className="votes">⭐ {props.vote_average.toFixed(2)} of 10 with {props.vote_count.toLocaleString("en-US")} votes</span>
    )
}

export default Votes