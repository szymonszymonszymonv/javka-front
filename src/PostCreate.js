import React from 'react'
import { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const sendReply = (message, topicId, navigate) => {
    const data = {
        content: message
    }
    console.log("kupcia")
    axiosInstance.post(`/topics/${topicId}/reply`, data)
        .then(response => {
            console.log(response)
            window.location.reload()
            // navigate(`/topics/${topicId}`)
        })
        .catch(error => {
            console.log(error)
        })
}

function PostCreate({ topicId }) {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    return (
        <>
            <label>
                Write your message:
                <textarea type="text" name="message" value={message}
                    onChange={(e) => {setMessage(e.target.value)}} >

                </textarea>
            </label>
            <button type="submit" onClick={() => {sendReply(message, topicId, navigate)}}>Send reply</button>
        </>
    )
}

export default PostCreate