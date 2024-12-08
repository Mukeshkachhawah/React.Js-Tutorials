import React from 'react'
import { useContext } from 'react'

import {data,data2} from '../Main'


export default function Second() {
    
    const a=useContext(data);

    const b=useContext(data2);
    
  return (
    <>
        <h1>{a}</h1>
        <h1>my location is {b}</h1>
    </>
  )
}
