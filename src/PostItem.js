import React from 'react'

function PostItem({post}) {
    return (
        <>
            <h3>{post?.user?.username}: {post?.content}</h3>
        </>
    )
}

export default PostItem