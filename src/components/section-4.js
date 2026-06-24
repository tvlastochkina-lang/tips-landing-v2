'use client'

import {useState} from 'react'

import {Ellipse2} from 'components'

export const Section4 = ({content}) => {
  const [current, set_current] = useState(content.sections.section4.points[0])

  const is_active = point => point === current

  const get_point_class = point => `point${is_active(point) ? ' active' : ''}`
  const get_dot = point => is_active(point) ? '/icons/dot_active.svg' : '/icons/dot.svg'
  const on_click = point => () => set_current(point)

  const {sections: {section4: {
    title,
    points
  }}} = content

  return (
    <section className="four" id="how_it_works">
      <div className="title">{title.start}&nbsp;<Ellipse2>{title.ellipse}</Ellipse2>&nbsp;{title.end}</div>
      <div className="points">
      {points.map(point => (
        <div
          className={get_point_class(point)}
          onClick={on_click(point)}
        >
          <img className="mob-banner" src={point.banner.url} />
          <img className="main-dot" src={get_dot(point)} alt="dot" />
          <img className="mob-dot" src="/icons/dot_active.svg" alt="dot" />
          <div className="num">0{point.id}</div>
          <div className="text">{point.text}</div>
        </div>
      ))}
      </div>
      {current ? (
        <img className="banner" src={current.banner.url} alt={current.banner.alt} />
      ) : null}
    </section>
  )
}
