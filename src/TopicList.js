import { useEffect, useState } from 'react';
import TopicItem from './TopicItem'
import React from 'react'
import axiosInstance from './axiosInstance';

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
const getTopicList = (setTopics) => {
    console.log("cxvxcv")
    axiosInstance.get("/topics")
        .then(response => {
            console.log(response)
            setTopics(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function TopicList() {
    const [topics, setTopics] = useState(topicList)
    useEffect(() => {
        getTopicList(setTopics)
        
    }, [])
    return (
        <div>
            <h2>Topic List</h2>
            {topics?.map(topic => { return <TopicItem topic={topic} key={topic.id}/> })}
        </div>
    )
}

export default TopicList;