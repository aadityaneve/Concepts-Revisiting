import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };

    return (
        <>
            <div>Welcome {auth.user}</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};
