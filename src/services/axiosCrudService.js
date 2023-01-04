import axios from 'axios';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */


export const login = (email, password) => {

    let body = {
        email:email,
        password:password
    }

    // Returns the Promise with a Promise
    return axios.post('https://reqres.in/api/login', body )

}

// TODO Obtain All Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

// TODO Obtain All paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO Obtain User by ID
export const getUsersById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO Create user
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users', body )
}

// TODO Update user
export const updateUserById = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body )
}

// TODO Delete user
export const deleteUsersById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}