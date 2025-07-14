'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'

export default async function OAuthCallback({params}) {
    const router = useRouter()
    const params = useSearchParams()
    const {verifyUser} = useAuthContext()
    const {token} = await params

    const getUser = async () => {
        await verifyUser()
    }

    useEffect(() => {
        if (token) {
            document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=strict`
           getUser()
            router.replace('/')
        }
    }, [token])

    return <div>Redirigiendo...</div>
}