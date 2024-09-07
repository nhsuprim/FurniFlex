import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contextApi/AuthContext"; // Replace with your auth context

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login page, saving the current location
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
