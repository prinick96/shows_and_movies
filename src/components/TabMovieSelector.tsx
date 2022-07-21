interface TabMovieSelectorProps {
    changeTab: any,
    movie: boolean
}

// tab for select what see (movie or show) in parent HomeView
function TabMovieSelector(props : TabMovieSelectorProps) {

	// change actually movie state in parent
	const handleChangeTab = (is_movie : boolean) => {
		props.changeTab(is_movie)
	}

	return (
		<ul className="tabs">
			<li>
				<a onClick={() => handleChangeTab(true)} className={props.movie ? 'selected' : ''}>
					Movies
				</a>
			</li>
			<li>
				<a onClick={() => handleChangeTab(false)} className={props.movie ? '' : 'selected'}>
					Shows
				</a>
			</li>
		</ul>
	)
}

export default TabMovieSelector