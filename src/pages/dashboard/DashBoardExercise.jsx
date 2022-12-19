import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TasklistFormik from '../../components/container/task_listFormik';

const Taskdashboard = () => {

    const navigate = useNavigate();

    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if (!user) {
        navigate('/');
        }
    });

    return <TasklistFormik user={user} />;
};

export default Taskdashboard;