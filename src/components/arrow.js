'use client'

import {useRef, useEffect} from 'react'

import {useCoeff} from 'lib/coeff'

export const Arrow = ({children}) => {
  const {container_ref, coeff} = useCoeff(60)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="nine" width="60" height="21" viewBox="0 0 60 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.5 18.9561C52 1.95625 29.5 -1.00104 16.5 3.00001C3.5 7.00106 2 18.9561 2 18.9561M54.5 18.9561L45 13.9561M54.5 18.9561L58.5 9.95607" stroke="#FD693A" stroke-width="2.5"/>
      </svg>
    </span>
  )
}
