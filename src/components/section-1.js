import {Line1} from 'components'

export const Section1 = ({lang, content}) => {
  const {sections: {section1: {
    title,
    details,
    button,
    benefits,
    banner
  }}} = content

  return (
    <section className="one">
      <div className="title">
        {title.start}&nbsp;
        <Line1>{title.line}</Line1>
        <span dangerouslySetInnerHTML={{__html: title.end}}></span>
      </div>
      <div className="details">{details}</div>
      <a href="#">{button}</a>
      <div className="divisor" />
      <div className="benefits">
      {benefits.map(benefit => (
        <div key={benefit.id} className="item">
          <img src={benefit.icon} />
          <span>{benefit.text}</span>
        </div>
      ))}
      </div>
      <img className="banner" src={banner.url} alt={banner.alt} />
    </section>
  )
}
