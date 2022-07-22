interface LoadingProps {
    // if is true, the height of loader will be 100vh
    page : boolean
}
const defaultProps: LoadingProps = {
    page : false,
}

// just loading status animation
const Loading = (props : LoadingProps) => {
    // build class name
    let pageClass = 'loading'
    pageClass += props.page ? 'page' : ''

    return (
        <div className={pageClass}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
Loading.defaultProps = defaultProps

export default Loading