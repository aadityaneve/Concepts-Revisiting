import React from 'react';
import { Outlet } from 'react-router-dom';

export const Users = () => {
    return (
        <>
            <div>User 1</div>
            <div>User 2</div>
            <div>User 3</div>
            <Outlet />
        </>
    );
};
