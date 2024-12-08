import React from 'react'
import img1 from './image/fruit1.jpg';
import img2 from './image/fruit2.jpg';
import img3 from './image/fruit3.jpg';
export default function Map() {

    const data = [
        { id: 1, title: "fruit1", img: img1 },
        { id: 2, title: "fruit2", img: img2 },
        { id: 3, title: "fruit3", img: img3 }
    ]

    return (

        <>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((a) => (
                            <div className='col-sm-4'>
                                <div class="card text-center">
                                    <img src={a.img} class="card-img-top p-3" alt="..." height={"250px"}/>
                                        <div class="card-body">
                                            <h5 class="card-title">{a.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
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
