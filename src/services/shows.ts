import moviedb from './moviedb'

export interface IShows {
    getMostPopularShows() : Promise<any>
    getShowDetailsById(id : number) : Promise<any>
    getRelatedShowsByGenres(id : number) : Promise<any>
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
    getRelatedShowsByGenres = async (id : number) : Promise<any> => {
        const shows = await moviedb.get('tv/' + id.toString() + '/similar')
        const response = await shows.data
        
        return response
    }

}