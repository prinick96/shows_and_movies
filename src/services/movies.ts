import moviedb from './moviedb'

export interface IMovies {
    getMostPopularMovies() : Promise<any>
    getMovieDetailsById(id : number) : Promise<any>
    getRelatedMoviesByGenres(id : number) : Promise<any>
}

// service for iterant with Movies
export class Movies implements IMovies {
    
    // get the most popular movies
    getMostPopularMovies = async () : Promise<any> => {
        const movies = await moviedb.get('discover/movie')
        const response = await movies.data
        
        return response
    }

    // get the movie details info by id
    getMovieDetailsById = async (id : number) : Promise<any> => {
        const movies = await moviedb.get('movie/' + id.toString())
        const response = await movies.data
        
        return response
    }

    // get the related movies from a genres list
    getRelatedMoviesByGenres = async (id : number) : Promise<any> => {
        const movies = await moviedb.get('movie/' + id.toString() + '/similar')
        const response = await movies.data
        
        return response
    }

}