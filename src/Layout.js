import { Link } from "react-router-dom"

function Layout() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/topics/create">Create Topic</Link>
        </nav>
    )
}

export default Layout