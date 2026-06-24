import {
  Ellipse1,
  Line2,
  Line3,
  Arrow,
  Arc
} from 'components'

export const Section2 = ({content}) => {
  const {sections: {section2: {
    banner,
    title,
    advices: {
      one,
      two,
      three,
      four
    }
  }}} = content

  return (
    <section className="two" id="about">
      <img className="banner" src={banner.url} alt={banner.alt} />
      <div className="content">
        <div className="title">{title}</div>
        <div className="divider one" />
        <div className="row one">{one.start}&nbsp;<Ellipse1>{one.ellipse}</Ellipse1>&nbsp;{one.end}</div>
        <div className="divider two" />
        <div className="row two">{two.start}&nbsp;<Line2>{two.line}</Line2>&nbsp;{two.end}</div>
        <div className="divider three" />
        <div className="row three">{three.start}&nbsp;<Arrow>{three.arrow}</Arrow>&nbsp;{three.end}</div>
        <div className="divider four" />
        <div className="row four">{four.start_line}&nbsp;<Line3>{four.line}</Line3>&nbsp;{four.mid}&nbsp;<Arc>{four.arc}</Arc>&nbsp;{four.end_arc}</div>
      </div>
    </section>
  )
}
