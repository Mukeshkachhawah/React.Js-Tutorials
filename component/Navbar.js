import React from 'react'

import { Link,Outlet } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}
