import React from 'react'
import axiosInstance from './axiosInstance';

const check = () => {
    axiosInstance.get("/username")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

function Home() {
    check()
    return (
        <>
            <h1>Welcome to Java Forum</h1>
        </>
    )
}

export default Home;