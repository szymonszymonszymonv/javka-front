import React from 'react'
import DeletePost from './DeletePost'
import UpdatePost from './UpdatePost'

function PostItem({post}) {
    return (
        <div className="postItem">
            <h3>{post?.user?.username}: {post?.content}</h3>
            <UpdatePost post={post}/>
            <DeletePost post={post} />
        </div>
    )
}

export default PostItem