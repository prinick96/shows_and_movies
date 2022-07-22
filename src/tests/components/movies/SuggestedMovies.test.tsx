import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import SuggestedMovies from '../../../components/movies/SuggestedMovies'
import { MoviesMocked } from '../../../services/movies.mock'
import { Genre } from '../../../types/genre'

describe('SuggestedMovies.tsx', () => {
    // mocked genres
    const genres = [
        {
            id : '1',
        },
        {
            id : '2',
        },
    ] as Array<Genre>

    // mocked movies
    const mockedMovies = new MoviesMocked()

    test('it should render 2 elements in the suggested ul', async () => {
        const { container } = render(<SuggestedMovies movies={mockedMovies} genres={genres} idMovie={1} />)
        
        // test 1 elements in the suggested ul
        await waitFor(() => {
            const li = container.getElementsByTagName('li')
            expect(li.length).to.equal(2)
        });
    })

})