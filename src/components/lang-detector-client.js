'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import {useCookies} from 'react-cookie'

export const LangDetectorClient = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [cookies] = useCookies()

  useEffect(() => {
    const current_lang = pathname.replace('/', '') || 'en-US'
    const tips_lang = cookies['tips_lang']
    if (!tips_lang) {
      const browser_lang = navigator.language || navigator.userLanguage
      if (current_lang === browser_lang) return
      switch (browser_lang) {
        case 'en-US': {
          router.push('/')
          return
        }
        case 'tr-TR': {
          router.push('/tr-TR')
          return
        }
        case 'bg-BG': {
          router.push('/bg-BG')
          return
        }
      }
    }
  }, [])

  return (<></>)
}
