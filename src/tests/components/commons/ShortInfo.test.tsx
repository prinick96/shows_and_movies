import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import ShortInfo from '../../../components/commons/ShortInfo'

describe('ShortInfo.tsx', () => {
    test('it should render a correct title and vote string', () => {
        const TITLE = 'test-title'
        const VOTE = 1
        const { container } = render(<ShortInfo title={TITLE} vote_average={VOTE} />)

        const h1 = container.getElementsByTagName('h1')
        const span = container.getElementsByTagName('span')

        expect(h1[0].innerHTML).to.equal(TITLE)
        expect(span[0].innerHTML).to.equal(`⭐ ${VOTE} of 10`)
    })
})