import React from "react"
import { Route, Switch, Router } from "wouter"
import routes from "./router/routes"

function App() {
	return (
		<main className="movie_and_shows_layout">
			<Router>
				<Switch>
					{
						routes.map((r) => {
							return <Route path={r.path} key={r.name}>
								{params => React.createElement(r.component, {...r.dependencies, ...params})}
							</Route>
						})
					}
				</Switch>
			</Router>
		</main>
	)
}

export default App
