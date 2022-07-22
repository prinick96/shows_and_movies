import { render, fireEvent } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import ListOfMovies from '../../../components/movies/ListOfMovies'
import { Movie } from '../../../types/movie'

describe('ListOfMovies.tsx', () => {
    // mocked movies
    const movies = [
        {
            id : 1,
        },
        {
            id : 2,
        },
        {
            id : 3,
        }
    ] as Array<Movie>

    test('it should render carrousel for movies', () => {
        const { container } = render(<ListOfMovies movies={movies} actualMovie={1} changeMovie={null} />)
        // test 3 elements .title in the carrousel render
        const title = container.getElementsByClassName('title')
        expect(title.length).to.equal(3)
    })

    test('it should do click next btn', () => {
        // test next btn
        const testNextBtn = (b : number) => {
            expect(b).to.equal(2)
        }
        const { container } = render(<ListOfMovies movies={movies} actualMovie={1} changeMovie={testNextBtn} />)

        // get next btn
        const a = container.getElementsByClassName('next')
        // just click
        fireEvent.click(a[0])
    })

    test('it should do click prev btn', () => {
        // test next btn
        const testPrevBtn = (b : number) => {
            expect(b).to.equal(0)
        }
        const { container } = render(<ListOfMovies movies={movies} actualMovie={1} changeMovie={testPrevBtn} />)

        // get prev btn
        const a2 = container.getElementsByClassName('previous')
        // just click
        fireEvent.click(a2[0])
    })
})