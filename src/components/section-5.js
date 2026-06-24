import {Line5} from 'components'

export const Section5 = ({content}) => {
  const {sections: {section5: {
    title,
    clients
  }}} = content

  return (
    <section className="five" id="partners">
      <div className="title">
        {title.start}&nbsp;<Line5>{title.line}</Line5>&nbsp;
        <span dangerouslySetInnerHTML={{__html: title.end}}></span>
      </div>
      <div className="clients">
      {clients.map(client => (
        <img key={client.id} src={client.img.url} alt={client.img.alt} />
      ))}
      </div>
    </section>
  )
}
