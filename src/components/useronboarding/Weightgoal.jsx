import React from 'react'
import weightgoal from '../useronboarding/weightgoal.css';

function Weightgoal() {
  return (
    <>
    <div className="general ">
      <div className="content row">
        <div className="textholder mb-1 mt-3"><h5>What is your weight goal?</h5></div>
          <div className="selections">
            <span className='options col-md-12'>Lose</span>
            <span className='options col-md-12'>Maintain</span>
            <span className='options col-md-12'>Gain</span>
          </div>
        <button className='next_butt mb-2'>NEXT</button>
      </div>

    </div>
    </>
  )
}

export default Weightgoal