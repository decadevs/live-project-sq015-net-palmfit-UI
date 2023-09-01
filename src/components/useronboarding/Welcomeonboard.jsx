import React from 'react'
import './welcomeonboard.css'
import 'bootstrap/dist/css/bootstrap.css';

function Welcomeonboard() {
  return (
    <div className='mt-5 holder d-flex justify-content-center'>
      <div className='custom '>
        <div className='row mt-5'>
          <div className='col'>
            <h4>Welcome! Let's Customize</h4>
            <h4 className='mb-5'>PalmFit for your goals.</h4>
            <button className='btn btn-success btn-md'>Continue</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Welcomeonboard