import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return props.loggedIn ? (
        <Component {...props} replace />
    ) : (
        <Navigate to="/signin" replace />
    );
};

export default ProtectedRoute;