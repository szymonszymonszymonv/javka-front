import { useState } from "react"
import axiosInstance from "./axiosInstance"

const sendUpdatedPost = (content, post) => {
    console.log(`updating topic ${post.id}`)
    console.log(`setting title ${content}`)

    const data = {
        content: content,
    }
    console.log(content)
    axiosInstance.put(`/posts/${post.id}`, content, {headers: {"Content-Type": "text/plain"}})
    .then(response => {
        console.log(response)
        window.location.reload()
    })
    .catch(error => {
        console.log(error)
    })
}




function UpdatePost({post}) {
    const [content, setContent] = useState('')

    return (
        <>
            <label>
                Update content:
                <input type="text" name="content"
                    onChange={(e) => {setContent(e.target.value)}} >

                </input>
            </label>
            <button type="submit" onClick={() => {sendUpdatedPost(content, post)}}>update</button>
        </>
    )
}

export default UpdatePost;