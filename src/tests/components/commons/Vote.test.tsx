import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import Votes from '../../../components/commons/Votes'

describe('Vote.tsx', () => {
    test('it should render a correct count and vote strings', () => {
        const COUNT = 100
        const AVERAGE = 1
        const { container } = render(<Votes vote_count={COUNT} vote_average={AVERAGE} />)

        const span = container.getElementsByTagName('span')

        expect(span[0].innerHTML).to.equal(`⭐ ${AVERAGE.toFixed(2)} of 10 with ${COUNT.toLocaleString("en-US")} votes`)
    })
})