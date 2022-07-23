import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import SuggestedMovies from '../../../components/movies/SuggestedMovies'
import { MoviesMocked } from '../../../services/movies.mock'

describe('SuggestedMovies.tsx', () => {
    // mocked movies
    const mockedMovies = new MoviesMocked()

    test('it should render 2 elements in the suggested ul', async () => {
        const { container } = render(<SuggestedMovies movies={mockedMovies} idMovie={1} />)
        
        // test 1 elements in the suggested ul
        await waitFor(() => {
            const li = container.getElementsByTagName('li')
            expect(li.length).to.equal(2)
        });
    })

})