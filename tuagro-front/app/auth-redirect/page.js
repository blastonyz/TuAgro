'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams} from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'

export default function OAuthCallback({params}) {
    const router = useRouter()
    const {verifyUser} = useAuthContext()
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

  useEffect(() => {
    if (token) {
      // ✅ Cookie con prefijo esperado
      document.cookie = `authToken=authToken=${token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=strict`

      verifyUser().then(() => {
        router.replace('/')
      })
    }
  }, [token])

  return <div>Redirigiendo...</div>

}