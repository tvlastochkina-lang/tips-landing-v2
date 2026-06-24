'use client'

import {useRef, useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'

export const useCoeff = base => {
  const searchParams = useSearchParams()
  const container_ref = useRef()
  const [coeff, set_coeff] = useState(1)

  useEffect(() => {
    if (!container_ref || !container_ref.current) return
    window.setTimeout(() => {
      const actual_width = container_ref.current.offsetWidth
      const coeff = actual_width / base
      set_coeff(coeff)
    }, 100)
  }, [container_ref, container_ref.current, searchParams])

  return ({container_ref, coeff})
}
