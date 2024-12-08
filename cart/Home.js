import React from 'react'
import data from './Data';
import Home2 from './Home2';

export default function Home() {
  return (
    <>
        {
            data.map((i)=>(
                <Home2 a={i}/>
            ))
        }
    </>
  )
}
