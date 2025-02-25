'use client'
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: null,
        role: ''
    })

    console.log('user: ', user);

    const getUser = async (userData) => {
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password
                }),
                 credentials: 'include'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('context data: ',data);
            
            setUser(data.user)
            console.log("User set in context:", data.user);
        } catch (error) {
            console.error("Error throguh login:", error);
        }
    }



    return (
        <AuthContext.Provider value={{ user, getUser }}
        >
            {children}
        </AuthContext.Provider>

    )
}

