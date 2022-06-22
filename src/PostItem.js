import React from 'react'
import DeletePost from './DeletePost'
import PostReport from './PostReport'
import UpdatePost from './UpdatePost'

function PostItem({post, topicId}) {
    return (
        <div className="postItem">
            <h3>{post?.user?.username}: {post?.content}</h3>
            <UpdatePost post={post} />
            <DeletePost post={post} />
            <PostReport post={post} topicId={topicId} />
        </div>
    )
}

export default PostItem