import React from 'react';
import { useAuth } from './auth';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />;
    }

    return children;
};
