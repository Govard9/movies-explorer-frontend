import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return localStorage.getItem('loggedIn') === 'true' ? (
        <Component {...props} replace />
    ) : (
        <Navigate to="/" replace />
    );
};

export default ProtectedRoute;
