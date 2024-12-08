import React from 'react'

import Navbar from './Navbar';
import Home from './Home';
export default function Outlet() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div >
                        <Navbar/>
                        <Home/>
                        </div>
                    </div>
                </div>
        </>
    )
}
