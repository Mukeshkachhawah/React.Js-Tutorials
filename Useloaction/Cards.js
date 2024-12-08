import React from 'react'

import data from './Data'
import { useNavigate } from 'react-router-dom';

export default function Cards() {


    const a = useNavigate();
    function dtl(i) {
        a('./detail', { state: { id: i } });
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((i) => (
                            <div className='col-sm-4'>
                                <div class="card">
                                    <img src={i.img} class="card-img-top p-3" alt="..." height={"250px"} />
                                    <div class="card-body">
                                        <h5 class="card-title">{i.title}</h5>
                                        <button class="btn btn-dark text-light" onClick={() => dtl(i.id)}>DETAIL</button>
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
