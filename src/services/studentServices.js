import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.hatchways.io/assessment/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
export default {
    getStudents() {
        return apiClient.get('/students')
    },
}
