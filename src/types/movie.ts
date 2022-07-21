import { Genre } from "./genre"

export interface Movie {
    id : number
    title: string
    overview: string
    vote_average: number
    poster_path: string
    backdrop_path: string
    genres: Array<Genre>
}