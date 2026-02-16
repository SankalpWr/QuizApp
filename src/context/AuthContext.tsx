"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Mock User Type
interface User {
    uid: string;
    email: string;
    displayName: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string) => void;
    loginWithGithub: () => void;
    signup: (email: string, name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: () => { },
    loginWithGithub: () => { },
    signup: () => { },
    logout: () => { }
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking local storage for session
        const storedUser = localStorage.getItem("quiz_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email: string) => {
        const mockUser = { uid: "mock-uid-123", email, displayName: email.split("@")[0] };
        setUser(mockUser);
        localStorage.setItem("quiz_user", JSON.stringify(mockUser));
    };

    const loginWithGithub = () => {
        const mockUser = { uid: "github-uid-456", email: "github_user@example.com", displayName: "GitHub User" };
        setUser(mockUser);
        localStorage.setItem("quiz_user", JSON.stringify(mockUser));
    };

    const signup = (email: string, name: string) => {
        const mockUser = { uid: "mock-uid-123", email, displayName: name };
        setUser(mockUser);
        localStorage.setItem("quiz_user", JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("quiz_user");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, loginWithGithub, signup, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
