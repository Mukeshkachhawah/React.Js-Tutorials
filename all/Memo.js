import React, { useState, useMemo } from 'react'

export default function Memo() {

    const [i, setInc] = useState(0);
    const [d, setDec] = useState(100);


    function Incre() {
        setInc(i + 1)
    }
    function Decre() {
        setDec(d - 1)
    }

    function multi(){
        console.log("hello i'm clicked")
        return i*2;
    }

    // const m = useMemo(
    //     function multi() {
    //         console.log("hello i'm clicked")
    //         return i * 2;
    //     },[i]
    // )

    return (
        <div>

            <button onClick={Incre}>+</button>
            <h1>Inc :- {i}</h1>
            <h1>Multi :-{multi()}</h1>
            <button onClick={Decre}>-</button>
            <h1>Dec :- {d}</h1>
        </div>
    )
}
