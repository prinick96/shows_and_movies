import { Genre } from "./genre"

export interface Movie {
    id : number
    title: string
    overview: string
    vote_average: number
    vote_count: number
    poster_path: string
    backdrop_path: string
    budget: number
    release_date: string
    genres: Array<Genre>
}