import React from 'react'

export default function Home2({ id, title, img }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'>
                    <div class="card">
                        <img src={img} class="card-img-top" alt="..." height={"200px"} />
                        <div class="card-body">
                            <h5 class="card-text">{id}</h5>
                            <h5 class="card-title">{title}</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
