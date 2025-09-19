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
      // Guardar el token en localStorage para usarlo como Bearer
      localStorage.setItem("authToken", token)
      router.replace("/") // redirige al home
    } else {
      // Si no hay token en query param, probamos cookie (login interno)
      verifyUser().then(() => {
        router.replace("/")
      })
    }
  }, [searchParams, router, verifyUser])

  return <div>Redirigiendo...</div>
}