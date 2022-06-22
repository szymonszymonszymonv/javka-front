import { useState } from "react"
import axiosInstance from "./axiosInstance"

const sendUpdatedTopic = (title, topic) => {
    console.log(`updating topic ${topic.id}`)
    console.log(`setting title ${title}`)

    const data = {
        title: title,
    }

    axiosInstance.put(`/topics/${topic.id}`, data)
    .then(response => {
        console.log(response)
        window.location.reload()
    })
    .catch(error => {
        console.log(error)
    })
}


function UpdateTopic({topic}) {
    const [title, setTitle] = useState('')

    return (
        <>
            <label>
                Update Title:
                <input type="text" name="title"
                    onChange={(e) => {setTitle(e.target.value)}} >

                </input>
            </label>
            <button type="submit" onClick={() => {sendUpdatedTopic(title, topic)}}>update</button>
        </>
    )
}

export default UpdateTopic;