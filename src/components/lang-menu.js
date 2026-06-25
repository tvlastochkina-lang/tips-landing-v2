'use client'

import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation'
import {useCookies} from 'react-cookie'

const is_parent = parent_el => el => {
  if (!el) return false
  if (el === parent_el) return true
  return is_parent(parent_el)(el.parentElement)
}

export const LangMenu = ({lang}) => {
  const [is_lang_menu, set_is_lang_menu] = useState(false)
  const router = useRouter()
  const menu_ref = useRef()
  const [_, setCookie] = useCookies()

  useEffect(() => {
    const handler = e => {
      if (!menu_ref || !menu_ref.current) return
      if (is_parent(menu_ref.current)(e.target)) return
      set_is_lang_menu(false)
    }
    document.body.addEventListener('click', handler)
    return () => {
      document.body.removeEventListener('click', handler)
    }
  }, [])

  const get_lang = value => {
    switch (value) {
      case 'en-US': return 'English'
      case 'bg-BG': return 'Български'
    }
  }

  const select_lang = value => () => {
    setCookie('tips_lang', value)
    set_is_lang_menu(false)
    if (value === 'en-US') {
      router.push('/')
    } else {
      const next_lang = `/${value}`
      router.push(next_lang)
    }
  }

  const lang_open = e => {
    e.preventDefault()
    e.stopPropagation()
    set_is_lang_menu(lang => !lang)
  }

  return (
    <a className="lang">
      <img src="/icons/lang.svg" alt="language" onClick={lang_open} />
      <span onClick={lang_open}>{get_lang(lang)}</span>
      {is_lang_menu ? (
        <ul ref={menu_ref}>
          <li onClick={select_lang('en-US')}>English</li>
          <li onClick={select_lang('bg-BG')}>Български</li>
        </ul>
      ) : null}
    </a>
  )
}
