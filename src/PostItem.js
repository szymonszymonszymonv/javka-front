import React from 'react'
import DeletePost from './DeletePost'

function PostItem({post}) {
    return (
        <div className="postItem">
            <h3>{post?.user?.username}: {post?.content}</h3>
            <DeletePost post={post} />
        </div>
    )
}

export default PostItem