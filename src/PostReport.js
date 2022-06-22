import React from 'react'
import { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const sendPostReport = (post, topicId) => {
    console.log("kupcia")
    const data = {
        topicId: topicId,
        content: post?.content
    }
    axiosInstance.post(`/posts/${post?.id}/report`, data)
        .then(response => {
            console.log(response)
            window.location.reload()
            // navigate(`/topics/${topicId}`)
        })
        .catch(error => {
            console.log(error)
        })
}

function PostReport({ post, topicId }) {
    return (
        <>
            <button type="submit" onClick={() => {sendPostReport(post, topicId)}}>Report post</button>
        </>
    )
}

export default PostReport