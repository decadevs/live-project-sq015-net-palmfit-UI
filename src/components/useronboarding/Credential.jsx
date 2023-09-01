import React from 'react'
import './credential.css'

function Credential() {
  return (
<div className='credential_container'>
        <div className='cal_con'>
            <h5>Calculate your calorie</h5>
        </div>
        <di>
            <div className='age_con'>
                <label>Your Age</label>
                <input type="text" />
            </div>
            <div className='age_con'>
                <label>Height</label>
                <input type="text" placeholder='cm'/>
            </div>
            <div className='age_con'>
                <label>Weight</label>
                <input type="text" placeholder='kg'/>
            </div>
        </di>
        <div className="gender">
            <h5>You're a</h5>
            <div className="holder">
                <button>Male</button>
                <button>Female</button>
            </div>
        </div>
        <div className='Direction'>
            <button>NEXT</button>
        </div>
    </div>
  )
}

export default Credential