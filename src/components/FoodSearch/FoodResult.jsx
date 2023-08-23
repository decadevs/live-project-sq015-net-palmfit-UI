import React from 'react'
import line from '../images/Line.svg';
import chevron from '../images/chevron.svg'

const FoodResult = () => {

  return (
    <>
     <div className="frame">
        <div className="text-wrapper-3"></div>
          <div className="text-wrapper-2"></div>
          <img className="chevron-right" alt="Chevron right" src={chevron} />
        </div>

        <img className="line" alt="Line" src={line} />
        <img className="img" alt="Line" src={line} />
    </>
  )
}

export default FoodResult
