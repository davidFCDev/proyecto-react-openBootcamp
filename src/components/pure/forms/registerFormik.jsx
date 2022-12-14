import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email:'',
        password:'',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
            {
                username: Yup.string()
                    .min(6, 'Username is too short')
                    .max(12, 'Username too long')
                    .required('Username is required'),
                email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
                role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                    .required('Rol is required'),
                password: Yup.string()
                    .min(8, 'Password is too short')
                    .required('Password is required'),
                confirm: Yup.string()
                    .when('password', {
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref('password')]
                        )
                    })
            }
    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = { initialValues }
                validationSchema = { registerSchema }
                onSubmit = { async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            { ({errors, 
                touched, 
                isSubmitting, 
                handleChange, 
                handleBlur}) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field 
                            id="username" 
                            type="text" 
                            name="username" 
                            placeholder="Your username" />

                        {
                            errors.username && touched.username &&
                            (
                                    <ErrorMessage name="username" component='div'/>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="example@example.com" />

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
                            placeholder="Password"
                            type="password"
                        />

                        {
                            errors.password && touched.password &&
                            (
                                    <ErrorMessage name="password" component='div'/>
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm password"
                            type="password"
                        />

                        {
                            errors.confirm && touched.confirm &&
                            (
                                    <ErrorMessage name="confirm" component='div'/>
                            )
                        }

                        <button type="submit">Register account</button>
                        { isSubmitting ? (<p>Sending your redentials</p>) : null }
                    </Form>
                )
            }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
