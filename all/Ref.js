import React from 'react'

import { useRef } from 'react'

export default function Ref() {


    function fun(){
        box.current.style.backgroundColor="red";
        box2.current.style.backgroundColor="blue";
        box2.current.style.color="white";
    }



    const box=useRef();
    const box2=useRef();
  return (
    <div>

        <div className='box' ref={box}></div>

        <button onClick={fun} ref={box2}>click</button>
    </div>








  )
}
