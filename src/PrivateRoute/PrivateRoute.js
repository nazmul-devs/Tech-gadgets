import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <Spinner animation="border" />

    }

    if (user.email) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ from: location }}></Navigate>
    );
};

export default PrivateRoute;