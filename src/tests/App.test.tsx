import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import routesMock from '../router/routes.mock'
import App from '../App'

describe('App.tsx', () => {
    test('it should render main.movie_and_shows_layout class', () => {
        const { container } = render(<App routes={routesMock} />)
        const main = container.getElementsByTagName('main')
        expect(main[0].className).to.equal('movie_and_shows_layout')
    })
})