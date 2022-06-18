import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'

function TopicItem({topic}) {
    return (
        <>
            <h3>{topic.createdBy}</h3>
            <Link to={`/topics/${topic.id}`}>
                <h2>{topic.title}</h2>
            </Link> 
            <h3>replies: {topic.replies}</h3>
        </>
    )
}

export default TopicItem