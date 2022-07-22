import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import SuggestedShows from '../../../components/shows/SuggestedShows'
import { ShowsMocked } from '../../../services/shows.mock'
import { Genre } from '../../../types/genre'

describe('SuggestedShows.tsx', () => {
    // mocked genres
    const genres = [
        {
            id : '1',
        },
        {
            id : '2',
        },
    ] as Array<Genre>

    // mocked shows
    const mockedShows = new ShowsMocked()

    test('it should render 2 elements in the suggested ul', async () => {
        const { container } = render(<SuggestedShows shows={mockedShows} genres={genres} idShow={1} />)
        
        // test 1 elements in the suggested ul
        await waitFor(() => {
            const li = container.getElementsByTagName('li')
            expect(li.length).to.equal(2)
        });
    })

})