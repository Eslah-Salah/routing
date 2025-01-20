import React from 'react';
import port1 from './port1.png';
import port2 from './port2.png';
import port3 from './port3.png';
import port4 from './port4.png';
import port5 from './port5.png';
import port6 from './port6.png';
import './Portfolio.css'
export default function Portfolio() {
  return (
    <div className='portfolio mb-4'>
       <div className="text-center pt-3">
          <h2 className="fw-bold text-uppercase mt-4 mb-3 fs-1">about component</h2>
          <div className="star mb-3">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port1}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port2}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port3}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port4}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port5}/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='rounded-3 overflow-hidden position-relative'>
                <img className='w-100 rounded-3' src={port6}/>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
