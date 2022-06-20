import { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout({setIsLoggedIn}) {
    localStorage.removeItem("token")
    const navigate = useNavigate()
    setIsLoggedIn(false)
    useEffect(() => {
        navigate("/")
    }, [])
    return (
        <>
            <h2>Logging out...</h2>
        </>
    )
}

export default Logout;