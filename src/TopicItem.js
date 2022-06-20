import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'


function TopicItem({topic}) {
    return (
        <>
            <h3>{topic?.user?.username}</h3>
            <Link to={`/topics/${topic?.id}`}>
                <h2>{topic?.title}</h2>
            </Link> 
        </>
    )
}

export default TopicItem