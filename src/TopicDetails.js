import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import PostList from "./PostList";
import React from 'react'
import PostCreate from "./PostCreate";
import axiosInstance from "./axiosInstance";
import UpdateTopic from "./UpdateTopic";
import UpdatePost from "./UpdatePost";


const getTopicDetails = (setTopicDetails, topicId) => {
    axiosInstance.get(`/topics/${topicId}`)
        .then(response => {
            console.log(response)
            setTopicDetails(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function TopicDetails() {
    const [topic, setTopic] = useState({})
    const { topicId } = useParams()

    useEffect(() => {
        getTopicDetails(setTopic, topicId)
    }, [])

    return (
        <div>
            <div className="topicDetails">
                <h3>topic created by: {topic?.user?.username}</h3>
                <h2>topic title: {topic?.title}</h2>
            </div>
            <PostList posts={topic?.posts} topicId={topic?.id}/>
            <PostCreate topicId={topic?.id}/>
        </div>
    )
}

export default TopicDetails;