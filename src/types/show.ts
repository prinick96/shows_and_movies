import { Genre } from "./genre"

export interface Show {
    id : number
    name: string
    overview: string
    vote_average: number
    poster_path: string
    backdrop_path: string
    genres: Array<Genre>
}