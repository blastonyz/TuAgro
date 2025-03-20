'use client'
import { useAuthContext } from "../components/context/AuthContext";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ login, profile,children}) {
    const { user } = useAuthContext();
    const pathname = usePathname();

    if (pathname === '/auth/register') {
        return children; 
    }

    if (!user?.email || user.email == '') {
        return login
        
    } else {
     
        return profile; 
    }
}