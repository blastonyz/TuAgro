'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function OAuthCallback() {
    const router = useRouter()
    const params = useSearchParams()
    const token = params.get('token')

    useEffect(() => {
        if (token) {
            document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=strict`
            router.replace('/')
        }
    }, [token])

    return <div>Redirigiendo...</div>
}