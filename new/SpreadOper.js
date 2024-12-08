import React from 'react'

export default function SpreadOper() {

    const data =["rahul ","rohit ","rohan "];

    const data2 =["mohan ","sohan ","Raees "];

    const data3 =[...data2,...data];
  return (
    <div>
            <h1>{data}</h1>
            <h1>{data2}</h1>
            <h1>{data3}</h1>
    </div>
  )
}
