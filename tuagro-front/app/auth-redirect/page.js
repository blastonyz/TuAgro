'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'

export default function OAuthCallback() {
  const router = useRouter()
  const { verifyUser } = useAuthContext()

  useEffect(() => {
    // La cookie ya debería estar seteada por el backend
    verifyUser().then(() => {
      router.push('/')
    })
  }, [])

  return <div>Redirigiendo...</div>
}