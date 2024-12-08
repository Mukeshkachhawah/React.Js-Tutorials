import React, { useState } from 'react'

export default function DateTime() {

    const ddate = new Date().toLocaleDateString();
    const date = new Date().toLocaleTimeString();

    const [d, setTime] = useState(date);
    const [dd] = useState(ddate);

    function fun(){
        const a = new Date().toLocaleTimeString();
        setTime(a);
    }

    setInterval(fun);

    return (
        <div>
            <h1 className='text-center'>{d}</h1>
            <h1 className='text-center'>{dd}</h1>

            {/* <button onClick={fun}>click</button> */}
        </div>
    )
}
