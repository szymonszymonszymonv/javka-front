import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'
import DeleteTopic from "./DeleteTopic"
import TopicFollow from "./TopicFollow"
import UpdateTopic from "./UpdateTopic"
function TopicItem({topic}) {
    return (
        <div className="topicItem">
            <h3>{"Author: " + topic?.user?.username}</h3>
            <Link to={`/topics/${topic?.id}`}>
                <h2>{topic?.title}</h2>
            </Link> 
            <UpdateTopic topic={topic}/>
            <DeleteTopic topic={topic} />
            <TopicFollow topic={topic} />
        </div>
    )
}

export default TopicItem