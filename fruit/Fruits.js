import React, { useState } from 'react'

import img1 from './image/apple.jpg';
import img2 from './image/orange.jpg';
import img3 from './image/banana.jpg';
import img4 from './image/mango.jpg';
import img5 from './image/grapes.jpg';
import img6 from './image/strawberry.jpg';


export default function Fruits() {

    const [a,num]=useState(0)
    function add(){
        num(a+1)
    } 

    const data = [
        { id: 1, title: "Apple", img: img1 , price:"-/ 50Rs"},
        { id: 2, title: "Orange", img: img2 , price:"-/ 100Rs"},
        { id: 3, title: "Banana", img: img3 , price:"-/ 30Rs"},
        { id: 4, title: "Mango", img: img4 , price:"-/ 150Rs"},
        { id: 5, title: "Grapes", img: img5 ,price:"-/ 110Rs"},
        { id: 6, title: "Strawberry", img: img6 ,price:"-/ 200Rs"}

    ]

    return (
        <>
            <div className='container-fluid'>
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
                    <div className='col-6 p-0 bg-dark'><i class="fa-solid fa-cart-shopping text-light float-end m-4">
                        { a } 
                    </i></div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((i) => (
                            <div className='col-sm-3 m-5'>
                                <div class="card">
                                    <img src={i.img} class="card-img-top p-3" alt="..." height={"300px"} />
                                    <div class="card-body">
                                        <h5 class="card-title"><h2>{i.title}</h2></h5>
                                        <p class="card-text"><b>{i.price}</b></p>
                                        <a href="#" class="btn btn-primary" onClick={add}>ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
