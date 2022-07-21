import axios, { AxiosInstance } from 'axios'
import { API_SERVICE, API_TOKEN } from '../data/env'

// Headers by default for each request
const headers = {
    'Content-Type' : 'application/json;charset=utf-8',
    'Authorization': 'Bearer ' + API_TOKEN,
}

// By default for each request
const moviedb: AxiosInstance = axios.create({
	baseURL: API_SERVICE,
	headers: headers,
})

export default moviedb