import {describe, test, expect} from 'vitest'
import useCarrousel from '../../hooks/carrousel'

describe('carrousel.ts', () => {
    test('handlePrevItem: if the item is > 0, we can catch decrement', () => {
        const current = 3
        const total = 10

        // handle test
        const testHandlePrevItem = (result : number) => {
            expect(result).to.equal(current - 1)
        }
        
        // call function from hook
        const { 
            handlePrevItem,
        } = useCarrousel(current, total, testHandlePrevItem)

        // execute
        handlePrevItem()
    })

    test('handleNextItem: if the item is < total, we can catch increment', () => {
        const current = 3
        const total = 10

        // handle test
        const testHandleNextItem = (result : number) => {
            expect(result).to.equal(current + 1)
        }
        
        // call function from hook
        const { 
            handleNextItem,
        } = useCarrousel(current, total, testHandleNextItem)

        // execute
        handleNextItem()
    })

    test('canShowNextBtn: if the item is == (total - 1), the class should be no-show', () => {
        const current = 9
        const current_2 = 8
        const total = 10

        // call function from hook
        const { 
            canShowNextBtn,
        } = useCarrousel(current, total, null)

        // execute
        expect(canShowNextBtn()).to.equal('no-show')

        // re call function from hook
        const { 
            canShowNextBtn : canShowNextBtn2,
        } = useCarrousel(current_2, total, null)

        // execute
        expect(canShowNextBtn2()).to.equal('')
        
    })

    test('canShowPrevBtn: if the item is == 0, the class should be no-show', () => {
        const current = 0
        const current_2 = 8
        const total = 10

        // call function from hook
        const { 
            canShowPrevBtn,
        } = useCarrousel(current, total, null)

        // execute
        expect(canShowPrevBtn()).to.equal('no-show')

        // re call function from hook
        const { 
            canShowPrevBtn : canShowPrevBtn2,
        } = useCarrousel(current_2, total, null)

        // execute
        expect(canShowPrevBtn2()).to.equal('')
        
    })
})