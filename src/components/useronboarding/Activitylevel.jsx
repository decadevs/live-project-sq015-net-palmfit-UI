import React from 'react'
import './activitylevel.css';

function Activitylevel() {
  return (
    <div className='activity_container'>
        <div className='baseline_con'>
            <h4>What is your activity level?</h4>
        </div>
        <div className='choice_con'>
            <div className="inactive"><h5>Inactive</h5> <span>(No exercise)</span></div>
            <div className="somewhat"><h5>Somewhat Active</h5> <span>(3x-4x per week)</span></div>
            <div className="active"><h5>Active</h5> <span>(5x+ per week)</span></div>
        </div>
        <div className="next_con">
            <button>NEXT</button>
        </div>
    </div>
  )
}

export default Activitylevel