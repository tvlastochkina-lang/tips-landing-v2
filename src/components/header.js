import {LangMenu, MobMenu} from 'components'

export const Header = ({lang, content}) => {
  const {header: {
    logo,
    menu: {
      about,
      how_it_works,
      partners,
      contacts
    },
    login
  }} = content

  return (
    <div className="header-container">
      <header>
        <nav>
          <a className="logo" href="/">{logo}</a>
          <menu>
            <a href="#about">{about}</a>
            <a href="#how_it_works">{how_it_works}</a>
            <a href="#partners">{partners}</a>
            <a href="#contacts">{contacts}</a>
          </menu>
        </nav>
        <LangMenu lang={lang} />
        <a className="login" href="#">{login}</a>
        <MobMenu lang={lang} content={content.header} />
      </header>
    </div>
  )
}
