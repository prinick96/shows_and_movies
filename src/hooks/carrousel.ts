export default function useCarrousel(item : number, total : number, changer: any) {
    // previous movie/show
    const handlePrevItem = () => {
        if (item > 0) {
            changer(item - 1)
        }
    }
    
    // next movie/show
    const handleNextItem = () => {
        if (item < (total - 1)) {
            changer(item + 1)
        }
    }

    // it show next btn if the actual is less than total
    const canShowNextBtn = () : string => {
        return item == (total - 1) ? 'no-show' : ''
    }

     // it show prev btn if the actual isn't the first
    const canShowPrevBtn = () : string => {
        return item == 0 ? 'no-show' : ''
    }

    return {
        handlePrevItem,
        handleNextItem,
        canShowNextBtn,
        canShowPrevBtn
    }
}