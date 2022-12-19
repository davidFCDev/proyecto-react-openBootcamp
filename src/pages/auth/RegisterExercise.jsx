import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {

    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    });

    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials);
            localStorage.setItem('user', c);
            navigate('/dashboard');
        }
    });

    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik onSubmit={(e) => setCredentials(e)} />
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default RegisterPage;
