import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import PostList from "./PostList";
import React from 'react'
import PostCreate from "./PostCreate";
import axiosInstance from "./axiosInstance";

const topicDetails = {
    id: 1,
    title: "where?",
    createdBy: "user",
    responses: [
        {
            id: 1,
            content: "response1",
            createdBy: "user2"
        },
        {
            id: 2,
            content: "default",
            createdBy: "user3"
        },
        {
            id: 3,
            content: "hiho",
            createdBy: "user4"
        }
    ]
}

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
            {/* <Link to={`/topics/${topicDetails.id}/reply`}>Reply to topic</Link> */}
        </>
    )
}

export default TopicDetails;