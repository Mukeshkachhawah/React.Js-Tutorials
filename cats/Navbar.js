import React from 'react'

export default function Navbar() {
    return (
        <>

            <div className='container bg-dark'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                            <div className='container-fluid'>
                                <a class="navbar-brand text-light" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link text-light" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-light" href="#">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-light" href="#">Pricing</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='col-sm-2'>
                        <i class="fa-sharp fa-solid fa-cart-shopping text-light float-end m-4"></i>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'></div>
                </div>
            </div>
        </>
    )
}
