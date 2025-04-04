'use client'
import { useAuthContext } from "../components/context/AuthContext";
import RecoveryForm from "../components/auth/recovery-pass/RecoveryForm";
import { usePathname } from "next/navigation";


export default function AuthLayout({ login, profile,admin,children}) {
    const { user } = useAuthContext();
    const pathname = usePathname();

    if (pathname === '/auth/register') {
        return children; 
    }
  
    if (pathname === '/auth/recovery-form') {
        return <RecoveryForm/>; 
    }
  
    if (!user?.email || user.email == '') {
        return login
        
    } else if (user.role == 'admin' ){
        return admin
    }else{
        return profile; 
    }
}