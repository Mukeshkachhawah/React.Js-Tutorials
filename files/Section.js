import React from 'react'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default function Section() {
  return (
    <>

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-sm-4  m-0 p-0 '>
            <Section1 />
          </div>
          <div className='col-sm-4 m-0  p-0'>
            <Section2 />          </div>
          <div className='col-sm-4 m-0  p-0'>
            <Section3 />
          </div>
        </div>
      </div>


    </>
  );
}
