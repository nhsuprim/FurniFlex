import React from "react";

import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const withLayout = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const location = useLocation();
        const hideOnPaths = ["/login", "/signup"];

        return (
            <>
                {!hideOnPaths.includes(location.pathname) && <Navbar />}
                <WrappedComponent {...props} />
                {!hideOnPaths.includes(location.pathname) && <Footer />}
            </>
        );
    };
};

export default withLayout;
