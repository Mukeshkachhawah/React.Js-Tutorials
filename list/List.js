import React, { useState } from 'react'


export default function List() {


    const [item, setitem] = useState("");
    const [items, setitems] = useState([]);

    function fun(event) {
        setitem(event.target.value);
    }
    function func(){
        setitems((i)=>[...i,item]);
        setitem(" ");
    }
    return (   
        <>
            <div className='container1'>
                <h3 className='text-center text-light mt-3'>LIST</h3>
                <input type="text" onChange={fun} value={item}/>
                <button onClick={func}>ADD ITEMS</button>
            </div>

            <div className='container2'>
            <ul>
                {
                    items.map((a)=>(
                        <li><h5 className='text-light mt-3'>{a}</h5></li>
                    ))
                }
            </ul>
            </div>
                
        </>
    )
}
