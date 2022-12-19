import React from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../../models/task.class';

const TaskDetailPage = ({task}) => {

const {id} = useParams();

    return (
        <div>
            <h1>Task Detail {id}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
