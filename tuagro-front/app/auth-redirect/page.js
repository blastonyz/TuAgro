'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams} from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'

export default function OAuthCallback({params}) {
 const router = useRouter()
  const { verifyUser } = useAuthContext()
  const searchParams = useSearchParams()

  const tokenWithPrefix = searchParams.get('token')

  useEffect(() => {
    if (tokenWithPrefix) {
      document.cookie = `authToken=${tokenWithPrefix}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=lax`

      verifyUser().then(() => {
        router.push('/')
      })
    }
  }, [tokenWithPrefix])

  return <div>Redirigiendo...</div>
}
