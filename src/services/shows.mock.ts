import { Show } from '../types/show'
import { IShows } from './shows'

export class ShowsMocked implements IShows {

    getMostPopularShows = async () : Promise<any> => {
        return { 
            results : [
                { id : 1 }, 
                { id : 2}
            ] as Array<Show> 
        }
    }

    getShowDetailsById = async (id : number) : Promise<any> => {
        return { results : {id : 1} as Show }
    }

    getRelatedShowsByGenres = async (id : number) : Promise<any> => {
        return { 
            results : [
                { id : 1 }, 
                { id : 2}
            ] as Array<Show> 
        }
    }

}