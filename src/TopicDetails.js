import { useState } from "react";
import { Link } from 'react-router-dom'
import PostList from "./PostList";
import React from 'react'
import PostCreate from "./PostCreate";

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

function TopicDetails() {
    return (
        <>
            <h3>topic created by: {topicDetails.createdBy}</h3>
            <h2>topic title: {topicDetails.title}</h2>
            <PostList posts={topicDetails.responses} />
            <PostCreate topicId={topicDetails.id}/>
            {/* <Link to={`/topics/${topicDetails.id}/reply`}>Reply to topic</Link> */}
        </>
    )
}

export default TopicDetails;