import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const a = useNavigate();

    const b = useNavigate();

    const c = useNavigate();

    function ab() {
        a("/about")
    }


    function se(){
        b("/service")
    }

    function ba(){
        c(-1)
    }

    return (
        <div>
            <h1>Home</h1>

            <button onClick={ab}>About</button><br /><br />

            <button onClick={se}>Service</button><br /><br />

            <button onClick={ba}>back</button><br />
        </div>
    )
}