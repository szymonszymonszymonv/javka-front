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
        <>
            <h3>topic created by: {topic?.user?.username}</h3>
            <h2>topic title: {topic?.title}</h2>
            <PostList posts={topic?.posts} />
            
            <PostCreate topicId={topic?.id}/>
            
        </>
    )
}

export default TopicDetails;