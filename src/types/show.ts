import { Genre } from "./genre"

export interface Show {
    id : number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    poster_path: string
    backdrop_path: string
    first_air_date: string
    last_air_date: string
    genres: Array<Genre>
}