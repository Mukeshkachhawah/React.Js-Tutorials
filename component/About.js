import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function About() {

    const b=useNavigate();
    function back(){
        b(-1)
    }


    return (
        <div><h1>About</h1>
        <button onClick={back}>x</button>
        </div>
    )
}