import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'
import {headers} from 'next/headers'

const detect_with_default = default_lang => data => {
  if (!data) return default_lang
  if (data.includes('tr-TR')) return 'tr-TR'
  if (data.includes('bg-BG')) return 'bg-BG'
  return default_lang
}

const detect_lang = detect_with_default('en-US')


export const LangDetector = () => {
  const cookies_list = cookies()
  const headers_list = headers()

  const tips_lang_cookie = cookies_list.get('tips_lang')
  const tips_lang = tips_lang_cookie ? tips_lang_cookie.value : null
  const current_lang = detect_lang(headers_list.get('x-url')) 

  if (tips_lang) {
    if (tips_lang === current_lang) return
    if (tips_lang === 'en-US') {
      redirect('/')
    } else {
      redirect(`/${tips_lang}`)
    }
  } else {
    const detect_or_current = detect_with_default(current_lang)
    const browser_lang = detect_or_current(headers_list.get('Accept-Language'))
    console.log('browser_lang: ', browser_lang)
    if (browser_lang === current_lang) return
    redirect(`/${browser_lang}`)
  }
}
