import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Service() {

    const b=useNavigate();
    function back(){
        b(-1)
    }
  return (
    <div>
        <h1>Service</h1>
        <button onClick={back}>x</button>
    </div>
  )
}