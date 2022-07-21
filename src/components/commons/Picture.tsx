// props for the picture uri
interface PictureProps {
    // size in px of image 
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