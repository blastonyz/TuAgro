'use client'
import { useAuthContext } from "../components/context/AuthContext";
import { usePathname } from "next/navigation";


export default function AuthLayout({ login, profile,admin,children}) {
    const { user } = useAuthContext();
    const pathname = usePathname();

    if (pathname === '/auth/register') {
        return children; 
    }

    if (!user?.email || user.email == '') {
        return login
        
    } else if (user.role == 'admin' ){
        return admin
    }else{
        return profile; 
    }
}