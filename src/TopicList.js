import { useState } from 'react';
import TopicItem from './TopicItem'
import React from 'react'

const topicList = [
    {
        id: 1,
        title: 'where to find diamonds?',
        createdBy: 'lightt',
        replies: 5
    },
    {
        id: 2,
        title: 'when?',
        createdBy: 'x',
        replies: 0
    },
    {
        id: 3,
        title: 'where?',
        createdBy: 'y',
        replies: 2
    },
]

function TopicList() {
    const [topics, setTopics] = useState(topicList)

    return (
        <div>
            <h2>Topic List</h2>
            {topics?.map(topic => { return <TopicItem topic={topic} key={topic.id}/> })}
        </div>
    )
}

export default TopicList;