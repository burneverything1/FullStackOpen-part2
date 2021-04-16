import axios from 'axios'
const baseUrl = 'http://localhost:3001/phonebook'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson)
}

export default { getAll, create, deletePerson, updatePerson }