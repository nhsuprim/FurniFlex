import React from "react";
import { AuthProvider } from "../AuthContext";
import { ProductProvider } from "../ProductContext";
import { CartProvider } from "../CartContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <ProductProvider>
                <CartProvider>{children}</CartProvider>
            </ProductProvider>
        </AuthProvider>
    );
};

export default Providers;
