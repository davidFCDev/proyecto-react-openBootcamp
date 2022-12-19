import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in Route:', location.pathname);

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true',
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go to page with state / Query params
            </button>
            <button onClick={() => navigate('/profile')}>
                Go to profile
            </button>
        </div>
    );
}

export default HomePage;
