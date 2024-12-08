import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Cards from './Cards';
import Detail from './Detail';

export default function Output() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Cards/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
