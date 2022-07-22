interface BackdropProps {
    // path of image
    path: string
}

// show the back drop image in background
function Backdrop(props : BackdropProps) {
    const uri = 'https://image.tmdb.org/t/p/w1280' + props.path
    const style = {   
        backgroundImage: `url('${uri}')`
    }

    return (
        <div className="bg_image" style={style}></div>
    )
}

export default Backdrop