import transformListOfGenresToString from '../utils/genre_to_string'
import { Genre } from '../types/genre'
import moviedb from './moviedb'

export interface IShows {
    getMostPopularShows() : Promise<any>
    getShowDetailsById(id : number) : Promise<any>
    getRelatedShowsByGenres(list_of_genres : Array<Genre>) : Promise<any>
}

// service for iterant with Shows
export class Shows implements IShows {

    // get the most popular tv shows
    getMostPopularShows = async () : Promise<any> => {
        const shows = await moviedb.get('discover/tv')
        const response = await shows.data
        
        return response
    }
    
    // get thw show details info by id
    getShowDetailsById = async (id : number) : Promise<any> => {
        const shows = await moviedb.get('tv/' + id.toString())
        const response = await shows.data
        
        return response
    }

    // get the related tv shows from a genres list
    getRelatedShowsByGenres = async (list_of_genres : Array<Genre>) : Promise<any> => {
        const genres = transformListOfGenresToString(list_of_genres)
        const shows = await moviedb.get('discover/tv?with_genres=' + genres)
        const response = await shows.data
        
        return response
    }

}