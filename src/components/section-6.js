'use client'

import {useState} from 'react'

export const Section6 = ({content}) => {
  const [current, set_current] = useState(0)

  const get_icon = id => id === current ? '/icons/open.svg' : '/icons/close.svg'

  const click = id => () => id === current ? set_current() : set_current(id)

  const {sections: {section6: {
    title,
    questions
  }}} = content

  return (
    <section className="six">
      <div className="title" dangerouslySetInnerHTML={{__html: title}}></div>
      <div className="questions">
        {questions.map(question => (
          <div className="question" key={question.id} onClick={click(question.id)}>
            <img src={get_icon(question.id)} />
            <div className="title">{question.title}</div>
            {current === question.id ? (
              <div className="text">{question.text}</div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
