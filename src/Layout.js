import { Link } from "react-router-dom"

function Layout({isLoggedIn}) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            {!isLoggedIn ? <Link to="/register">Register</Link> : ""}
            {!isLoggedIn ? <Link to="/login">Login</Link> : ""}
            {isLoggedIn ? <Link to="/topics/create">Create Topic</Link> : ""}
            {isLoggedIn ? <Link to="/logout">Logout</Link> : ""}
            {/* <Link to="/login">Login</Link> */}
            {/* <Link to="/topics/create">Create Topic</Link> */}
            {/* <Link to="/logout">Logout</Link> */}
        </nav>
    )
}

export default Layout