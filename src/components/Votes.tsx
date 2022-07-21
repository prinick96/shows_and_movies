interface VotesProps {
    // average
    vote_average: number

    // total votes
    vote_count: number
}

function Votes(props : VotesProps) {
    return (
        <span className="votes">⭐ {props.vote_average} of 10 with {props.vote_count} votes</span>
    )
}

export default Votes