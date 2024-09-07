import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with a default value that matches the context type
export const CounterContext = createContext<CounterContextType | undefined>(
    undefined
);

interface CounterProviderProps {
    children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
    children,
}) => {
    const [count, setCount] = useState(5);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};
