import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'
import DeleteTopic from "./DeleteTopic"


function TopicItem({topic}) {
    return (
        <div className="topicItem">
            <h3>{topic?.user?.username}</h3>
            <Link to={`/topics/${topic?.id}`}>
                <h2>{topic?.title}</h2>
            </Link> 
            <DeleteTopic topic={topic} />
        </div>
    )
}

export default TopicItem