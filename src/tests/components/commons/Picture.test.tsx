import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import Picture from '../../../components/commons/Picture'

describe('Picture.tsx', () => {
    test('it should render img.src with correct uri', () => {
        const PATH = '/image.jpg'
        const SIZE = 100
        const { container } = render(<Picture size={SIZE} path={PATH} />)
        const uri = 'https://image.tmdb.org/t/p/w' + SIZE.toString() + PATH

        const img = container.getElementsByTagName('img')
        expect(img[0].src).to.equal(uri)
    })
})