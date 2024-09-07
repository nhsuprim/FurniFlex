import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface IAuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => void;
    signup: (
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = user !== null;

    // Load the current logged-in user from localStorage when the app initializes
    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const login = (email: string, password: string) => {
        const users = JSON.parse(
            localStorage.getItem("users") || "[]"
        ) as User[];
        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );
        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); // Persist logged-in user
        } else {
            alert("Invalid email or password");
        }
    };

    const signup = (
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) => {
        const users = JSON.parse(
            localStorage.getItem("users") || "[]"
        ) as User[];
        const userExists = users.some((u) => u.email === email);

        if (userExists) {
            alert("User with this email already exists!");
            return;
        }

        const newUser = { firstName, lastName, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users)); // Store updated users array

        setUser(newUser);
        localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Persist logged-in user
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser"); // Remove the logged-in user from localStorage
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, user, login, signup, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing Auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
