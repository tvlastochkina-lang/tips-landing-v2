import {Line4} from 'components'

export const Section3 = ({content}) => {
  const {sections: {section3: {
    title,
    clients: {
      bars,
      hotels,
      delivery,
      beauty
    }
  }}} = content

  return (
    <section className="three">
      <div className="title">{title.start}&nbsp;<Line4>{title.line}</Line4>&nbsp;{title.end}</div>
      <div className="clients">
        <div className="item bars">
          <img  src={bars.img.url} alt={bars.img.alt} />
          <div className="text" dangerouslySetInnerHTML={{__html: bars.text}}></div>
        </div>
        <div className="item hotels">
          <img  src={hotels.img.url} alt={hotels.img.alt} />
          <div className="text" dangerouslySetInnerHTML={{__html: hotels.text}}></div>
        </div>
        <div className="item delivery">
          <img src={delivery.img.url} alt={delivery.img.alt} />
          <div className="text" dangerouslySetInnerHTML={{__html: delivery.text}}></div>
        </div>
        <div className="item beauty">
          <img src={beauty.img.url} alt={beauty.img.alt} />
          <div className="text" dangerouslySetInnerHTML={{__html: beauty.text}}></div>
        </div>
      </div>
    </section>
  )
}
