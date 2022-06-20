import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout({setIsLoggedIn}) {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setIsLoggedIn(false)
        navigate("/")
    }, [])
    return (
        <>
            <h2>Logging out...</h2>
        </>
    )
}

export default Logout;