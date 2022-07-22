import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import { MoviesMocked } from '../../../services/movies.mock'
import { ShowsMocked } from '../../../services/shows.mock'
import store from '../../../store/store'
import HomeView from '../../../views/home/HomeView'
import { Provider } from "react-redux"

describe('HomeView.tsx', () => {
    test('it should render div.home', async () => {
        // mocks
        const mockedShows = new ShowsMocked()
        const mockedMovies = new MoviesMocked()

        // redux
        const wrapper = ({ children } : any) => (
            <Provider store={store}>{children}</Provider>
        );

        // inject store
        const { container } = render(<HomeView movies={mockedMovies} shows={mockedShows} />, {
            wrapper
        })

        // wait for mocks
        await waitFor(() => {
            // render home
            const div = container.getElementsByClassName('home')
            expect(div.length).to.equal(1)

            // render a movie in carrousel of movies (selected by default)
            const div3 = container.getElementsByClassName('movie')
            expect(div3.length).to.equal(2)
        });
    })
})