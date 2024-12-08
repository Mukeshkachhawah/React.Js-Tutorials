import React from 'react'

import { useRef } from 'react';

export default function Width() {

  var i = 0;
  function add() {
    if (i == 0) {
      height.current.style.height = "200px";
      height1.current.style.height = "0px";
      height2.current.style.height = "0px";
      height.current.style.transition = "2s";
      i = 1;
      x = 0;
      y = 0;

    }
    else {
      height.current.style.height = "0px";
      height.current.style.transition = "2s";
      i = 0;
    }
  }
  var x = 0;
  function add1() {
    if (x == 0) {
      height1.current.style.height = "200px";
      height.current.style.height = "0px";
      height2.current.style.height = "0px";
      height1.current.style.transition = "2s";
      x = 1;
      i = 0;
      y = 0;
    }
    else {
      height1.current.style.height = "0px";
      height1.current.style.transition = "2s";
      x = 0;
    }
  }
  var y = 0;
  function add2() {
    if (y == 0) {
      height.current.style.height = "0px";
      height1.current.style.height = "0px";
      height2.current.style.height = "200px";
      height2.current.style.transition = "2s";
      y = 1;
      x = 0;
      i = 0;
    }
    else {
      height2.current.style.height = "0px";
      height2.current.style.transition = "2s";
      y = 0;
    }
  }
  const height = useRef();
  const height1 = useRef();
  const height2 = useRef();

  return (
    <>
      <div className='box' onClick={add}>1</div>
      <div className='height' ref={height}></div>

      <div className='box1' onClick={add1}>2</div>
      <div className='height1' ref={height1}></div>

      <div className='box2' onClick={add2}>3</div>
      <div className='height2' ref={height2}></div>
    </>
  )
}
