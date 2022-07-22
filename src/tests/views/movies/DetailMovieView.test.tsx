import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import { MoviesMocked } from '../../../services/movies.mock'
import DetailMovieView from '../../../views/movies/DetailMovieView'

describe('DetailMovieView.tsx', () => {
    test('it should render div.home', async () => {
        // mocks
        const mockedMovies = new MoviesMocked()
        // inject store
        const { container } = render(<DetailMovieView movies={mockedMovies} id={1} />)

        // wait for mocks
        await waitFor(() => {
            // render detail
            const div = container.getElementsByClassName('item-detail')
            expect(div.length).to.equal(1)

            // read the title of detail
            const h1 = container.getElementsByClassName('js-detail-title')
            expect(h1.length).to.equal(1)
        });
    })
})