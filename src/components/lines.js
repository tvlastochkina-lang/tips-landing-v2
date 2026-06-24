'use client'

import {useRef, useState, useEffect} from 'react'

import {useCoeff} from 'lib/coeff'

export const Line1 = ({children}) => {
  const {container_ref, coeff} = useCoeff(139)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="one" transform={`scale(${coeff} 1)`} transform-origin="left" width="139" height="13" viewBox="0 0 139 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10C11.0091 6.34032 52.4219 0.118853 138 4.51047" stroke="#FD693A" stroke-width="5"/>
      </svg>
    </span>
  )
}

export const Line2 = ({children}) => {
  const {container_ref, coeff} = useCoeff(93)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="two" transform={`scale(${coeff} 1)`} transform-origin="left" width="93" height="10" viewBox="0 0 93 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 3.91225C18.5 1.74558 62.1 -0.387752 92.5 8.41225" stroke="#FD693A" stroke-width="3"/>
      </svg>
    </span>
  )
}

export const Line3 = ({children}) => {
  const {container_ref, coeff} = useCoeff(43)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="three" transform={`scale(${coeff} 1)`} transform-origin="left" width="43" height="7" viewBox="0 0 43 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.4125C6.5 3.74583 22.4 0.912499 42 2.9125" stroke="#FD693A" stroke-width="2.5"/>
      </svg>
    </span>
  )
}

export const Line4 = ({children}) => {
  const {container_ref, coeff} = useCoeff(142)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="four" transform={`scale(${coeff} 1)`} transform-origin="left" width="142" height="13" viewBox="0 0 142 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10.0001C25 5.83345 86.6 -0.899885 141 5.50012" stroke="#F86E43" stroke-width="5"/>
      </svg>
    </span>
  )
}

export const Line5 = ({children}) => {
  const {container_ref, coeff} = useCoeff(226)

  return (
    <span className="graphics container" ref={container_ref}>
      <span className="content">{children}</span>
      <svg className="five" transform={`scale(${coeff} 1)`} transform-origin="left" width="226" height="11" viewBox="0 0 226 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9C39.4 4.91406 137.96 -1.68882 225 4.58718" stroke="#F86E43" stroke-width="4"/>
      </svg>
    </span>
  )
}
