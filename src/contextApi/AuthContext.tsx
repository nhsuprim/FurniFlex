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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = user !== null;

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
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
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
        localStorage.setItem("users", JSON.stringify(users));

        setUser(newUser);
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser");
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

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
