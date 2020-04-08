import axios from 'axios'

const localUrl = 'http://localhost:3333'

const api = axios.create({
    baseURL: localUrl
})

export default api