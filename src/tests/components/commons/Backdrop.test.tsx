import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import Backdrop from '../../../components/commons/Backdrop'

describe('Backdrop.tsx', () => {
    test('it should render div.https://image.tmdb.org/t/p/w1280/image.jpg style', () => {
        const PATH = '/image.jpg'
        const { container } = render(<Backdrop path={PATH} />)

        const uri = 'https://image.tmdb.org/t/p/w1280' + PATH
        const div = container.getElementsByClassName('bg_image')
        const style = window.getComputedStyle(div[0])
        expect(style.backgroundImage).to.equal(`url(${uri})`)
    })
})