import React from 'react'

import { useReducer } from 'react';

const j=0
const col =(state,action)=>{
    switch(action){
        case "add":
            return state +1;
        case "subs":
            return state -1;
        default :
            return state;
    }
}

export default function Practice() {

    const [i,calcu]=useReducer(col,j);

  return (
    <>
    <button onClick={()=>{calcu("add")}}>+</button> 
    <h1><b>{i}</b></h1>
    <button onClick={()=>{calcu("subs")}}>-</button>
    </>
  )
}
