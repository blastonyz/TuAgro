'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'

export default function OAuthCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { verifyUser } = useAuthContext()

  useEffect(() => {
    const token = searchParams.get("token")

    if (token) {
      
      localStorage.setItem("authToken", token)
      verifyUser().then(() => {
        router.replace("/") // redirige al home
      })
    } else {
      
      router.replace("/auth/login")
    }
  }, [searchParams, router, verifyUser])

  return <div>Redirigiendo...</div>
}