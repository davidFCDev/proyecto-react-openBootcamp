import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {

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
            <h1>Login page</h1>
            <LoginFormik onSubmit={(e) => setCredentials(e)} />
            <Link to='/register'>Register</Link> 
        </div>
    );
}

export default LoginPage;
