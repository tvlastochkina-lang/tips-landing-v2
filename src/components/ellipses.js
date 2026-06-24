'use client'

import {useRef, useEffect} from 'react'

import {useCoeff} from 'lib/coeff'

export const Ellipse1 = ({children}) => {
  const {container_ref, coeff} = useCoeff(50)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="six" transform={`scale(${coeff} 1)`} transform-origin="left" width="78" height="58" viewBox="0 0 78 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.3004 2C17.2168 4.20276 -19.6284 31.9953 17.7787 50.6251C55.0438 69.1842 87.7555 35.1764 71.9024 16.8686C59.2198 2.22242 23.8126 7.33453 7.27765 14.1152" stroke="#FD693A" stroke-width="3"/>
      </svg>
    </span>
  )
}

export const Ellipse2 = ({children}) => {
  const {container_ref, coeff} = useCoeff(130)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="seven" transform={`scale(${coeff} 1)`} transform-origin="left" width="170" height="84" viewBox="0 0 170 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69.766 82C121.77 81.4741 167.471 65.6965 167.996 42.5561C168.521 19.4157 119.669 3.11222 78.1706 2.06039C36.6725 1.00855 2.5284 13.6306 2.00311 45.1857C1.47782 76.7408 67.6648 76.7408 86.05 74.6371" stroke="#F86E43" stroke-width="4"/>
      </svg>
    </span>
  )
}
