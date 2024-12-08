import React from 'react'

import Navbar from './Navbar';
import Cart from './Cart';

export default function Fruitcart() {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <Navbar/>
          </div>
        </div>
        <div className='row'>
        <div className='col-sm-12'>
          <Cart/>
        </div>
        </div>
    </div>
  )
}
