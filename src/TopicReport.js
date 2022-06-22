import React from 'react'
import { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const sendTopicReport = (topicId) => {
    axiosInstance.post(`/topics/${topicId}/report`)
        .then(response => {
            console.log(response)
            window.location.reload()
            // navigate(`/topics/${topicId}`)
        })
        .catch(error => {
            console.log(error)
        })
}

function TopicReport({ topic }) {
    return (
        <>
            <button type="submit" onClick={() => {sendTopicReport(topic.id)}}>Report topic</button>
        </>
    )
}

export default TopicReport