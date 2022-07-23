import { Movie } from '../types/movie'
import { IMovies } from './movies'


export class MoviesMocked implements IMovies {
    
    getMostPopularMovies = async () : Promise<any> => {
        return { 
            results : [
                { id : 1 }, 
                { id : 2 }
            ] as Array<Movie> 
        }
    }

    getMovieDetailsById = async (id : number) : Promise<any> => {
        return { results : {id : 1} as Movie }
    }

    getRelatedMoviesByGenres = async (id : number) : Promise<any> => {
        return { 
            results : [
                { id : 1 }, 
                { id : 2 }
            ] as Array<Movie> 
        }
    }

}