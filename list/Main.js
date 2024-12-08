import React, { useState } from 'react'
import Data from './Data';
export default function Main() {

    const [item, setItem] = useState("");

    const [items, setItems] = useState([]);

    function fun(event) {
        setItem(event.target.value);
    }

    function fun2() {
        setItems((a) => [...a, item])
        setItem("");
    }

    function del(id) {
        console.log("delete");
        setItems((a) => {
            return a.filter((arr,index)=>{
                return index!==id;
            })
        
    })
}
return (
    <div>
        <input type="text" onChange={fun} value={item} />

        <button onClick={fun2}>+</button>


        {
            items.map((aa, index) => (
                <Data text={aa} id={index} onSelect={del} />
            ))
        }
    </div>
)
}
