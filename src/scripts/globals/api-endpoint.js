import axios from 'axios'

const API_ENDPOINT = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default API_ENDPOINT;