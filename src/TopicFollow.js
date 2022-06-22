import axiosInstance from "./axiosInstance";

const topicFollowApi = (topic, navigate) => {
    console.log(`following topic ${topic.id}`)
    
    axiosInstance.post(`/topics/${topic.id}/follow`)
        .then(response => {
            console.log(response)
            // window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
}   

function TopicFollow({ topic }) {


    return (
        <>
          <button onClick={() => {topicFollowApi(topic)}}>Follow topic</button>  
        </>
    )
}

export default TopicFollow;