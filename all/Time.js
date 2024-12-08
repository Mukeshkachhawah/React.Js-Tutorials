import React, { useState } from 'react'

export default function Time() {
     
    const Time=new Date().toLocaleTimeString();

    const [t,setTime]=useState(Time);

    function fun(){
        const a=new Date().toLocaleTimeString();
        setTime(a);
    }

    setInterval(fun)

  return (
    <>
        <h1 className='text-center'>{t}</h1>
    </>
  )
}
