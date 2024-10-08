import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contextApi/AuthContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
