import React from 'react'

function PostItem({post}) {
    return (
        <>
            <h3>{post.createdBy}</h3>
            <h2>{post.content}</h2>
        </>
    )
}

export default PostItem