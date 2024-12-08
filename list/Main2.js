import React from 'react'
import { useState } from 'react';
export default function Main2() {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    function fun(a) {
        setItem(a.target.value);
    }

    function fun2(){
        setItems((tech)=>[...tech,item]);
        setItem("")
    }


    return (
        <div>
            <input type="text" onChange={fun} value={item}/>
            <button onClick={fun2}>+</button>
            {
                items.map((aa)=>(
                    <h1>{aa}</h1>
                ))
            }
        </div>
    )
}
