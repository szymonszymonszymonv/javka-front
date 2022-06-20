import { useState } from "react"
import React from 'react'
import axiosInstance from "./axiosInstance"

const registerSend = (data) => {
    // post data to api
    axiosInstance.post('/registration', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

function RegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [role, setRole] = useState('')

    // send this guy to api
    const newUser = { 
        username: username,
        email: email,
        password: password,
        passwordRepeat: passwordRepeat,
        role: role
    }

    return (
        <>
            <label>
                username: 
                <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }}></input>
            </label>
            <label>
                email:
                <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
            </label>
            <label>
                password:
                <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}></input>
            </label>
            <label>
                repeat password:
                <input type="password" name="passwordRepeat" onChange={(e) => { setPasswordRepeat(e.target.value) }}></input>
            </label>
            <label>
                user
                <input type="radio" name="roleUser" checked={role === "USER"} onChange={() => {setRole("USER")}}></input>
            </label>
            <label>
                admin
                <input type="radio" name="roleAdmin" checked={role === "ADMIN"} onChange={() => {setRole("ADMIN")}}></input>
            </label>
            <button type="submit" onClick={() => {registerSend(newUser)}}>Submit</button>
        </>
    )
}

export default RegisterForm