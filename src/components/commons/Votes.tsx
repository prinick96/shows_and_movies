interface VotesProps {
    // average
    vote_average: number

    // total votes
    vote_count: number
}

// show the votes average and total votes in detail page of movie/show
function Votes(props : VotesProps) {
    const average = props.vote_average?.toFixed(2)
    const total = props.vote_count?.toLocaleString("en-US")

    return (
        <span className="votes">⭐ {average} of 10 with {total} votes</span>
    )
}

export default Votes