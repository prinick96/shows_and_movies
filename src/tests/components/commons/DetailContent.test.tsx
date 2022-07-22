import { render } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import DetailContent from '../../../components/commons/DetailContent'

describe('DetailContent.tsx', () => {
    test('it should render h1.title with test-title content', () => {
        const { container } = render(<DetailContent detail={{
            title : "test-title",
            relevantName: "Released",
            relevantIcon: "📅",
            relevantValue: "test",
            relevantName2: "Budget",
            relevantIcon2: "💵",
            relevantValue2: '$1',
            overview: "test-overview",
        }}  />)

        const h1 = container.getElementsByClassName('title')
        expect(h1[0].innerHTML).to.equal('test-title')
    })
})