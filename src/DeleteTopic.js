import axiosInstance from "./axiosInstance";

const deleteTopicApi = (topic, navigate) => {
    console.log(`deleting topic ${topic.id}`)
    axiosInstance.delete(`/topics/${topic.id}`)
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
}

function DeleteTopic({ topic }) {
    return (
        <>
          <button onClick={() => {deleteTopicApi(topic)}}>Delete topic</button>  
        </>
    )
}

export default DeleteTopic;