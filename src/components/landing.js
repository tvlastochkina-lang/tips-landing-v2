import {
  Header,
  Main,
  Footer
} from 'components'

export const Landing = ({lang, content}) => {

  return (
    <div id="root">
      <Header lang={lang} content={content} />
      <div className="grey-back" />
      <Main content={content} />
      <Footer content={content} />
    </div>
  )
}
