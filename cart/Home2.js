import React from 'react'

export default function Home2({a}) {
    const {id,img,name}=a;
  return (
    <div>
        <h3>{id}</h3>
        <img src={img}/>
        <h3>{name}</h3>
        <br/><br/>
    </div>
  )
}