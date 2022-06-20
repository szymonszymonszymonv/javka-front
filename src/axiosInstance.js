import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
  })
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = token
    }
    else{
        delete config.headers.Authorization
    }
    return config
})

export default axiosInstance