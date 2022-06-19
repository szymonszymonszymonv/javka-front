import React from 'react'
import { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useParams } from 'react-router'

const sendReply = (message, topicId) => {
    const data = {
        content: message,
        topicId: topicId
        // cookie? user id?
    }
    axiosInstance.post(`/topics/${topicId}/reply`, data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

function PostCreate({ topicId }) {
    const [message, setMessage] = useState('')
    return (
        <>
            <label>
                Write your message:
                <textarea type="text" name="message" value={message}
                    onChange={(e) => {setMessage(e.target.value)}} >

                </textarea>
            </label>
            <button type="submit" onClick={() => {sendReply(message, topicId)}}>Send reply</button>

        </>
    )
}

export default PostCreate