const axiosInstance = axios.create({
    baseURL: 'http://localhost/api/v1',
    timeout: 1000
  })

export default axiosInstance