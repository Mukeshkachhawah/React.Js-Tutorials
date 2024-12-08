import React from 'react'

import Navbar from './Navbar';


import Home from './Home';

import About from './About';

import Service from './Service';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function Layout() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/service' element={<Service/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
