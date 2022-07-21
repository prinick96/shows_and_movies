import React from "react"
import { Provider } from "react-redux"
import store from "./store/store"
import { Route, Switch, Router } from "wouter"
import routes from "./router/routes"

function App() {
	return (
		<main className="movie_and_shows_layout">
			<Provider store={store}>
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
			</Provider>
		</main>
	)
}

export default App
