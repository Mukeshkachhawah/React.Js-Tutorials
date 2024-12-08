import React from 'react'

import { useState, useMemo } from 'react'

export default function Multi() {

  const [a, data] = useState(0);
  const b = 100;

  function Incre() {
    data(a + 1);
  }
  function Decre() {
    data(a - 1);
  }

  function Multi() {
    return a * b;
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <button onClick={Incre}>+</button>
            <h3>{a}</h3>
            <button onClick={Decre}>-</button>
          </div>
          <div className='col-sm-4'>
            <h4>price : {b}</h4>
          </div>
          <div className='col-sm-4'>
            <h4>total : {Multi()}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
