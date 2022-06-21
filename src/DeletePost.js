import axiosInstance from "./axiosInstance";

const deletePostApi = (post) => {
    axiosInstance.delete(`/posts/${post.id}`)
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
}

function DeletePost({ post }) {
    return (
        <>
          <button onClick={() => {deletePostApi(post)}}>Delete post</button>  
        </>
    )
}

export default DeletePost;