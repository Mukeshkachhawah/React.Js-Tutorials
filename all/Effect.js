import React, { useState } from 'react'

import axios from 'axios'

import { useEffect } from 'react';

export default function Effect() {
    const [data, UpdateData] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users")
        // .then(res=>console.log(res))
        .then(res => UpdateData(res.data))
    },[])
    return (
        <div>
            {
                data.map((a)=>(
                    <>
                    <p>{a.id}</p>
                    <p>{a.login}</p>
                    <img src={a.avatar_url} alt="" />
                    </>
                ))
            }
        </div>
    )
}
