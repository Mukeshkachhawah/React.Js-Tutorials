
import React from 'react'

import { useReducer } from 'react'

const b = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Incre":
            return state + 1;
        case "decre":
            return state - 1;
        default:
            return state;
    }
}

export default function Main() {


    const [a, count] = useReducer(reducer, b);

    return (
        <div>
            <button onClick={()=>count("Incre")}>Increment</button>

            <h1>{a}</h1>
            <button onClick={()=>count("decre")}>Decrement</button>
        </div>
    )
}
