import { render, fireEvent } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import TabMovieSelector from '../../../components/home/TabMovieSelector'

describe('TabMovieSelector.tsx', () => {
    test('it should render Shows text inner <a> element', () => {
        const { container } = render(<TabMovieSelector changeTab={null} movie={true} />)

        const a = container.getElementsByTagName('a')
        expect(a[1].innerHTML).to.equal('Shows')
    })

    test('it should do click tab movies btn ', () => {
        const testMovieBtn = (b : boolean) => {
            expect(b).to.equal(true)
        }
        const { container } = render(<TabMovieSelector changeTab={testMovieBtn} movie={true} />)

        // get the button 
        const a = container.getElementsByTagName('a')

        // just click
        fireEvent.click(a[0])
    })

    test('it should do click tab shows btn ', () => {
        const testShowsBtn = (b : boolean) => {
            expect(b).to.equal(false)
        }
        const { container } = render(<TabMovieSelector changeTab={testShowsBtn} movie={true} />)

        // get the button 
        const a = container.getElementsByTagName('a')

        // just click
        fireEvent.click(a[1])
    })
})