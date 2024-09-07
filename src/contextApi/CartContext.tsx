import React, { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "./ProductContext";

interface CartItem extends IProduct {
    quantity: number;
    discountedPrice: number;
    totalPrice: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: string) => void;
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
    getTotalPrice: () => number;
    getTotalQuantity: () => number;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number
) => {
    return price - price * (discountPercentage / 100);
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: IProduct) => {
        const discountedPrice = calculateDiscountedPrice(
            product.price,
            product.discountPercentage
        );

        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            );
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              totalPrice: (item.quantity + 1) * discountedPrice,
                          }
                        : item
                );
            }
            return [
                ...prevCart,
                {
                    ...product,
                    quantity: 1,
                    discountedPrice,
                    totalPrice: discountedPrice,
                },
            ];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const incrementQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          totalPrice:
                              (item.quantity + 1) * item.discountedPrice,
                      }
                    : item
            )
        );
    };

    const decrementQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          totalPrice:
                              (item.quantity - 1) * item.discountedPrice,
                      }
                    : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.totalPrice, 0);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                getTotalPrice,
                getTotalQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
