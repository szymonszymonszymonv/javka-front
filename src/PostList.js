import PostItem from "./PostItem"
import React from 'react'

function PostList({posts, topicId}) {
    return (
        <>
            {posts?.map(post => {return <PostItem post={post} topicId={topicId} key={post.id} />})}
        </>
    )
}

export default PostList