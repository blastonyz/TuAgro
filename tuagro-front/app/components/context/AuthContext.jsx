'use client'
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: null,
        role: '',
        cart: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            await verifyUser();
        };
        fetchData();
    }
        , [])

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
            const data = await response.json();
            if (!response.ok || !data.user) {
                console.log('status: ', data);
                toast.error('Error al iniciar sesión');
                setUser({ first_name: '', last_name: '', email: null, role: '' })
                return { success: false, message: data.message || "Failed to login" }
            }


            console.log('context data: ', data);
            setUser(data.user)
            toast.success('Inicio de sesión exitoso', {
                onClose: () => router.push('/'),
            });

            return { success: true, user: data.user }
        } catch (error) {
            console.error("Error throguh login:", error);
            setUser({ first_name: '', last_name: '', email: null, role: '' });
            toast.error('Error al iniciar sesión');
            throw error;
        }
    }

    const verifyUser = async () => {
        try {
            const token = localStorage.getItem("authToken")

            const headers = {
                "Content-Type": "application/json",
            }

            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch("/api/auth/session", {
                method: "GET",
                headers,
                credentials: "include", // solo útil si hay cookie
            })
            const data = await response.json();
            if (!response.ok || !data.user) {
                console.log('status: ', data);
                setUser({ first_name: '', last_name: '', email: null, role: '' })
                return { success: false, message: data.message || "Failed to login" }
            }

            console.log('context data: ', data);
            setUser(data.user)
            return { success: true, user: data.user }
        } catch (error) {
            console.error("Error throguh login:", error);
            setUser({ first_name: '', last_name: '', email: null, role: '' });
            toast.error('Error al iniciar sesión');
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, getUser, verifyUser }}
        >
            {children}
            <ToastContainer autoClose={1200} />
        </AuthContext.Provider>

    )
}

