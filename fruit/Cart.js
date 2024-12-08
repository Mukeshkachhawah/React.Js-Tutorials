import React from 'react'

import img1 from './image/apple.jpg';
import img2 from './image/orange.jpg';
import img3 from './image/banana.jpg';
import img4 from './image/mango.jpg';
import img5 from './image/grapes.jpg';
import img6 from './image/strawberry.jpg';

export default function Cart() {
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
                    {
                        data.map((i) => (
                            <div className='col-sm-3 m-5'>
                                <div class="card">
                                    <img src={i.img} class="card-img-top p-3" alt="..." height={"300px"} />
                                    <div class="card-body">
                                        <h5 class="card-title"><h2>{i.title}</h2></h5>
                                        <p class="card-text"><b>{i.price}</b></p>
                                        <a href="#" class="btn btn-primary">ADD TO CART</a>
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
