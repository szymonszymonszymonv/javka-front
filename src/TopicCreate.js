import React, { useState } from 'react'
import axiosInstance from './axiosInstance'

const sendTopic = (title) => {
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    const data = {
        title: title,
        username: username
    }
    axiosInstance.post(`/topics/create`, data)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

function TopicCreate() {
    const [title, setTitle] = useState('')

    return (
        <>
            <label>
                Write your message:
                <input type="text" name="title"
                    onChange={(e) => {setTitle(e.target.value)}} >

                </input>
            </label>
            <button type="submit" onClick={() => {sendTopic(title)}}>Send reply</button>
        </>
    )
}

export default TopicCreate