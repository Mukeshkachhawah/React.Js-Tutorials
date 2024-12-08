import React from 'react'

import { useLocation } from 'react-router-dom';
import data from './Data';
export default function Detail() {
  const locate = useLocation();

  const data1 = locate.state.id;

  return (
    <>
      {/* <h1>{data}</h1> */}
      {/* <h1>detail</h1> */}


      {
        data.map((a) => (
          (a.id == data1) ?
            <>
              <h1>{a.title}</h1>
              <img src={a.img} alt="" />
            </>
            : <h1></h1>
        ))
      }

    </>
  )
}
