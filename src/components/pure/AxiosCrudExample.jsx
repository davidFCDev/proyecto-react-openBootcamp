import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getAllUsers, getAllPagedUsers, getUsersById, login, createUser, updateUserById, deleteUsersById } from '../../services/axiosCrudService';



const AxiosCrudExample = () => {

    const initialCredentials = {
        email:'',
        password:''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
            password: Yup.string()
            .required('Password is required')
        }
    )

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data));
                    sessionStorage.setItem('token', response.data.token)

                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failed');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
    }

    // CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('No user found')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error(`No users found in page ${page}`)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const obtainUsersById = (id) => {
        getUsersById(id)
            .then((response) => {
                if(response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const updateUser = (id, name, job) => {
        updateUserById(id, name, job)
            .then((response) => {
                if(response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not found and not updated')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }
    
    const deleteUser = (id) => {
        deleteUsersById(id)
            .then((response) => {
                if(response.status === 204) {
                    alert(`User with id ${id} successfully deleted`)
                } else {
                    throw new Error('User not found and no delete done')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    return (
        <div>
                <h4>* Login *</h4>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit = { async (values) => {
                    authUser(values)
                }}
            >

                { ({errors, 
                touched, 
                isSubmitting, 
                handleChange, 
                handleBlur}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@example.com" />

                        {
                            errors.email && touched.email &&
                            (
                                    <ErrorMessage name="email" component='div'/>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password &&
                            (
                                    <ErrorMessage name="password" component='div'/>
                            )
                        }

                        <button type="submit">Login</button>
                        { isSubmitting ? (<p>Login your credentials</p>) : null }
                    </Form>
                )}     
            </Formik>
            <div>
                <button onClick={obtainAllUsers} >
                    Get All Users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)} >
                    Get All Users (Page 1) with Axios
                </button>
                <button onClick={() => obtainUsersById(1)} >
                    Get User 1
                </button>
                <button onClick={() => createNewUser('Paco','leader')} >
                    Create User
                </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')} >
                    Update User
                </button>
                <button onClick={() => deleteUser(5)} >
                    Delete User
                </button>
            </div>
        </div>
    );
}

export default AxiosCrudExample;
