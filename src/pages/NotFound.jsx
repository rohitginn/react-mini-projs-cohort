import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__text">Page not found.</p>
            <Link className="notFound__link" to="/">
                Go to Home
            </Link>
        </div>
    );
}

