export const Section7 = ({content}) => {
  const {sections: {section7: {
    title,
    banner,
    banner_mob,
    button
  }}} = content

  return (
    <section className="seven" id="contacts">
      <img className="main" src={banner.url} alt={banner.alt} />
      <img className="mob" src={banner_mob.url} alt={banner.alt} />
      <div className="title" dangerouslySetInnerHTML={{__html: title}}></div>
      <a href="#">{button}</a>
    </section>
  )
}
