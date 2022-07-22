import { render, waitFor } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import { ShowsMocked } from '../../../services/shows.mock'
import DetailShowView from '../../../views/shows/DetailShowView'

describe('DetailShowView.tsx', () => {
    test('it should render div.home', async () => {
        // mocks
        const mockedShows = new ShowsMocked()
        // inject store
        const { container } = render(<DetailShowView shows={mockedShows} id={1} />)

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