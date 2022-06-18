import PostItem from "./PostItem"
import React from 'react'

function PostList({posts}) {
    return (
        <>
            {posts?.map(post => {return <PostItem post={post} key={post.id} />})}
        </>
    )
}

export default PostList