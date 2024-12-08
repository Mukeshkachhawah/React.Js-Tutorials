import React from 'react'

import img from './image/fruit1.jpg';
import img1 from './image/fruit2.jpg';
import img3 from './image/fruit3.jpg';

export default function Data() {
    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-4'>
                        <img src={img1} alt="" className='img-fluid' />
                    </div>
                    <div className='col-sm-4'>
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className='col-sm-4'>
                        <img src={img3} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}
