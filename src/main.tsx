import React from 'react'
import routes from "./router/routes"
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/main.scss'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App routes={routes} />
	</React.StrictMode>
)
