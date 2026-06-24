'use client'

import {useState} from 'react'

import {LangMenu} from 'components'

export const MobMenu = ({lang, content}) => {
  const [is_menu_open, set_is_menu_open] = useState(false)

  const {
    logo,
    login,
    menu: {
      about,
      how_it_works,
      partners,
      contacts
    }
  } = content

  const on_menu = e => {
    e.preventDefault()
    set_is_menu_open(is_open => !is_open)
  }

  const close_menu = () => {
    set_is_menu_open(false)
  }

  return (
    <a className="mob-menu-button" href="#">
      {is_menu_open ? (
        <>
          <div className="mob-menu">
            <div className="container">
              <header>
                <a className="logo" href="/">{logo}</a>
                <a className="login" href="#">{login}</a>
                <a className="mob-menu-button" href="#" onClick={close_menu}>
                  <img src="/icons/close_modal.svg" />
                </a>
              </header>
              <div className="menu" onClick={close_menu}>
                <a href="#about" className="item">{about}</a>
                <a href="#how_it_works" className="item">{how_it_works}</a>
                <a href="#partners" className="item">{partners}</a>
                <a href="#contacts" className="item">{contacts}</a>
              </div>
              <div className="filler"></div>
              <LangMenu lang={lang} />
            </div>
          </div>
        </>
      ) : (
        <img src="/icons/menu.svg" onClick={on_menu} />
      )}
    </a>

  )
}
