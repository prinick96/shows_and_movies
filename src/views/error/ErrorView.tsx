import { Link } from "wouter"

// default view for 404
function ErrorView() {
	return (
		<section className="container">
            <div className="error">
			    <p>404 Not Found</p>
				<Link to="/" className="button">Back to Home</Link>
            </div>
		</section>
	)
}

export default ErrorView
