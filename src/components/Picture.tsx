// props for the picture uri
interface PictureProps {
    // size in px of image 
    // available: 45, 92, 185, 300, 500, 700, 1280
    size: number
    // path of image
    path: string
}

// render a picture
function Picture(props: PictureProps) {
    const uri = 'https://image.tmdb.org/t/p/w' + props.size.toString() + props.path

    return (
        <picture>
            <img src={uri} />
        </picture>
    )
}

export default Picture