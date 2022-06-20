import { useState } from "react"
import React from 'react'
import axiosInstance from "./axiosInstance"
import { useNavigate } from "react-router"

const loginSend = (data, setIsLoggedIn, navigate) => {
    // post data to api
    axiosInstance.post('/login', data)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)
            setIsLoggedIn(true)
            navigate("/")
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

function LoginForm({setIsLoggedIn}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // send this guy to api
    const user = { 
        username: username,
        password: password,
    }

    return (
        <>
            <label>
                username: 
                <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }}></input>
            </label>
            <label>
                password:
                <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
            </label>
            <button type="submit" onClick={() => {loginSend(user, setIsLoggedIn, navigate)}}>Submit</button>
        </>
    )
}

export default LoginForm