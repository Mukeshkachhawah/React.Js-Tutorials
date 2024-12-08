import React from 'react'

import { useState } from 'react';

export default function () {
  const [a, num] = useState(0)
  function add() {
    num(a + 1);
  }

  return (
    <div className='conatiner-fluid'>
      <div className='row'>
        <div className='col-6 p-0'>
          <nav class="navbar navbar-expand-sm bg-dark ">

            <a class="navbar-brand text-primary" href="#"><h2 className='m-2'>FRUITS</h2></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">

              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">CONTACT</a>
                </li>
              </ul>

            </div>
          </nav>
        </div>
        <div className='col-6 p-0 bg-dark'><i class="fa-solid fa-cart-shopping text-light float-end m-4"></i></div>
      </div>
    </div>
  )
}
