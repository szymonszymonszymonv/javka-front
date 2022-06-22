import React from 'react'
import { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const sendPostReport = (postId) => {

    axiosInstance.post(`/topics/${postId}/report`)
        .then(response => {
            console.log(response)
            window.location.reload()
            // navigate(`/topics/${topicId}`)
        })
        .catch(error => {
            console.log(error)
        })
}

function PostReport({ post }) {
    return (
        <>
            <button type="submit" onClick={() => {sendPostReport(post.id)}}>Report post</button>
        </>
    )
}

export default PostReport