interface BackdropProps {
    // path of image
    path: string
}

function Backdrop(props : BackdropProps) {
    const uri = 'https://image.tmdb.org/t/p/w1280' + props.path

    return (
        <div className="bg_image" style={{backgroundImage: `url('${uri}')`}}></div>
    )
}

export default Backdrop