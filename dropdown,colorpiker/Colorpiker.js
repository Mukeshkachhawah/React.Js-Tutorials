import React, { useRef } from 'react'

export default function Colorpiker() {

    function move(){

        box.current.style.backgroundColor="rgb("+red.current.value+","+green.current.value+","+blue.current.value+")";
    }
    
    const box=useRef();
    const red=useRef();
    const green=useRef();
    const blue=useRef();
  return (
    <>
        <div className="box" ref={box}></div>
        
        <input type="range" ref={red} onChange={move} min={0} max={300}/><br/>
        <br />
        <input type="range" ref={green} onChange={move} min={0} max={255}/><br/>
        <br />
        <input type="range" ref={blue} onChange={move} min={0} max={255}/><br/>
    </>
  )
}
