import { Genre } from "../types/genre"

// it transform an array list of Genre objects, to id's string like 1,2,3,4...
const transformListOfGenresToString = (list_of_genres: Array<Genre>) : string => {
    let ids = list_of_genres.map((genre) => genre.id)
    
    return ids.toString()
}

export default transformListOfGenresToString