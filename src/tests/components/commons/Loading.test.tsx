import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import Loading from '../../../components/commons/Loading'

describe('Loading.tsx', () => {
    test('it should render div.lds-ripple', () => {
        const { container } = render(<Loading />)

        const h1 = container.getElementsByClassName('lds-ripple')
        expect(h1.length).to.equal(1)
    })
})