import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        };
    };

    const auth = useAuth();

    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navLinkStyles} to='/about'>
                About
            </NavLink>
            <NavLink style={navLinkStyles} to='/products'>
                Products
            </NavLink>
            <NavLink style={navLinkStyles} to='/profile'>
                Profile
            </NavLink>
            {!auth.user && (
                <NavLink style={navLinkStyles} to='/login'>
                    Login
                </NavLink>
            )}
        </nav>
    );
};
