import React, { useContext } from 'react'

import {data} from './First'
export default function SEcond() {

  const a=useContext(data)
  return (
    <>
      <h1>{a}</h1 >
    </>
  )
}
