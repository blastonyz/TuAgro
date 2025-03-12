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


    useEffect( ()=>{
        const fetchData = async () => {
            await verifyUser();
        };
        fetchData();
    }
    ,[])

    console.log('user: ', user);
    //http://localhost:8080/login

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
            const data = await response.json();
            if (!response.ok || !data.user) {
                console.log('status: ',data );
                setUser({ first_name: '', last_name: '', email: null, role: '' })
                return { success: false, message: data.message || "Failed to login" }
            }
            
           
            console.log('context data: ',data);
            setUser(data.user)
            return { success: true, user: data.user }
        } catch (error) {
            console.error("Error throguh login:", error);
            setUser({ first_name: '', last_name: '', email: null, role: '' }); 
            throw error;
        }
    }

    const verifyUser = async () => {
        try {
            const response = await fetch('/api/auth/session', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                 credentials: 'include'
            });
            const data = await response.json();
            if (!response.ok || !data.user) {
                console.log('status: ',data );
                setUser({ first_name: '', last_name: '', email: null, role: '' })
                return { success: false, message: data.message || "Failed to login" }
            }
            
            console.log('context data: ',data);
            setUser(data.user)
            return { success: true, user: data.user }
        } catch (error) {
            console.error("Error throguh login:", error);
            setUser({ first_name: '', last_name: '', email: null, role: '' }); 
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, getUser }}
        >
            {children}
        </AuthContext.Provider>

    )
}

