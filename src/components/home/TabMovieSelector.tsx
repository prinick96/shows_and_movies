interface TabMovieSelectorProps {
    changeTab: any
    movie: boolean
}

// tab for select what see (movie or show) in parent HomeView
function TabMovieSelector(props : TabMovieSelectorProps) {

	// change actually movie state in parent
	const handleChangeTab = (is_movie : boolean) => {
		props.changeTab(is_movie)
	}
	
	const movie_class = props.movie ? 'selected' : ''
	const show_class = props.movie ? '' : 'selected'

	return (
		<ul className="tabs">
			<li>
				<a onClick={() => handleChangeTab(true)} className={movie_class}>
					Movies
				</a>
			</li>
			<li>
				<a onClick={() => handleChangeTab(false)} className={show_class}>
					Shows
				</a>
			</li>
		</ul>
	)
}

export default TabMovieSelector